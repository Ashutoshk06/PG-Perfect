import { useDispatch, useSelector } from "react-redux"
import pay1 from "../pages/HomePage/images/pay1.png"
import { buySubscription, getRazorpayId, varifySubscribtion } from "../redux/slice/paymentSlice"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Photo } from "@mui/icons-material"
import { addComplain } from "../redux/slice/userSlice"
const StudentDashboard=()=>{
    const userData=useSelector((store)=>store.user.data)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {fullName,email}=useSelector((store)=>store.auth.data)
    const paymentDetails={
        payment_id:"",
        signature:"",
        subscription_id:""
    }
    const key=useSelector((store)=>store.payment.key)
    const subscription_id=userData.subscription.id

    async function load(){
        await dispatch(getRazorpayId())
    }
    useEffect(()=>{
        load()
    },[])
    async function handelSubscribe(e){
        e.preventDefault()
        console.log(subscription_id);
        if(!key || !subscription_id){
            toast.error("Something went wrong")
            return
        }

        const option={
            key:key, 
            subscription_id:subscription_id,
            name: 'Coursify Pvt. Ltd.',
            description: 'Subscription',
            amount:userData.subscription.amount,
            currency:"INR",
            theme: {
                color: '#F37254'
            },
            prefill:{
               email:email,
               name:fullName
            },
           
              handler:async function (response){
                // console.log(response);
                paymentDetails.payment_id=response.razorpay_payment_id
                paymentDetails.signature=response.razorpay_signature
                paymentDetails.subscription_id=response.razorpay_subscription_id

                toast.success("Payment successfull")

                // const res=await dispatch(varifySubscribtion(paymentDetails))
                // console.log(res);
                 //This varifySuvhbscribtion return sucess and message field from backend
                // if(res?.payload?.sucess){
                //     toast.success(res?.payload?.message)
                
                // }
                // else{
                //     toast.error(res?.payload?.message)
                    
                // }
              }
        }
        const paymentObject=new window.Razorpay(option)
        paymentObject.open()

    }


    const [complainData,setComplainData]=useState({
        type:"",
        title:"",
        description:"",
        photos:[]
    })
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (e) => {
        console.log(e.target.files);
      if (e.target.files) {
        const filesArray = Array.from(e.target.files);
        
        setSelectedImages((prevImages) => prevImages.concat(filesArray));
      }
    };
    function handelComplainData(e){
        const {name,value}=e.target 
        setComplainData({
            //set all the values as it is
            ...complainData,
            //change the fullName to new value
            [name]:value,
        })
    }
    async function onSubmit(e){
        e.preventDefault()
      
        if(!complainData.type || !complainData.title  || !complainData.description){
            toast.error("Please fill all the details")
            return
        }
       
        const formData=new FormData()
       formData.append("type",complainData.type)
       formData.append("title",complainData.title)
       formData.append("description",complainData.description)
      
      selectedImages.forEach((image) => {
        formData.append('photos', image);
      });

      const response=await dispatch(addComplain(formData))
      console.log(response?.payload);
      if(response?.payload?.sucess){
        setComplainData({
            type:"",
            title:"",
            description:"",
            photos:[]
        })
        setSelectedImages([])
      }
    }
    return(
        <div className="w-[100%] h-[100%]">
        <div className="w-[100%] h-[25%]">
          <nav className="h-[85px] border-b-2"></nav>

          <header className="bg-slate-200 shadow">
            <div className="w-full py-4 px-10">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Welcome, User
              </h1>
            </div>
          </header>
        </div>
        <main className="flex  items-center gap-6 w-[100%] h-[580px] px-10 py-6">
          <div className=" bg-slate-200 flex flex-col justify-center items-center w-[25%]] h-[100%] border-2 rounded-lg shadow-lg px-4 py-6">
            <h1 className="font-semibold mb-4 text-blue-600">
              Having issue? No problem we will fix{" "}
            </h1>

            <div className="flex flex-col justify-center w-[80%]">
                <form onSubmit={onSubmit} >
              <div className="mb-5 flex flex-col ">
                <label for="name" className=" block font-medium">
                  Type of complain
                </label>
                <input
                  type="text"
                  name="type"
                  onChange={handelComplainData}
                  required={true} 
                  value={complainData.type}
                  id="name"
                  placeholder="Type"
                  className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex flex-col ">
                <label for="name" className=" block font-medium">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  id="name"
                  onChange={handelComplainData}
                  required={true} 
                  value={complainData.title}
                  placeholder="Type of complain"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex flex-col ">
                <label for="name" className=" block font-medium">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="name"
                  onChange={handelComplainData}
                  required={true} 
                  value={complainData.description}
                  placeholder="Description"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label for="property_photos" className=" block font-medium">
                  Photos
                </label>
                <input
                  type="file"
                  name="photos"
                  onChange={handleImageChange}
                  id="property_photos"
                  multiple
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <button type="submit" className="text-center rounded-2xl bg-blue-600 text-white px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-lg hover:shadow-slate-600 active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none w-[350px]">
              Lodge a complaint
            </button>
              </form>
            </div>
            
          </div>
            
          <div className="flex gap-8 w-[75%] h-[100%] border-[2px] rounded-lg shadow-lg px-4 py-6">
            <div className="w-1/2 flex flex-col justify-center rounded-lg bg-slate-200">
              <h1 className="p-4 text-2xl text-center tracking-tighter text-white bg-blue-600 rounded-lg">
                Rent
              </h1>
              <div className="w-full h-[180px] overflow-hidden">
                <img
                  className="w-full h-full object-center"
                  src={pay1}
                  alt=""
                />
              </div>
              <p className="p-4 text-base font-regular">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                quibusdam quod consectetur, dolores amet eius libero unde
                similique. Iusto expedita dicta porro.
              </p>
              <h2 className="p-4 text-center text"></h2>
              <h4 className="p-4 text-center font-light text-sm">
                * Terms and conditions applied *
              </h4>
              <button onClick={handelSubscribe} className="w-full bg-blue-600 rounded-md text-white p-4 text-lg">
                Pay Now
              </button>
            </div>
            <div className="w-1/2 flex flex-col justify-center rounded-lg bg-slate-200">
            <h1 className="p-4 text-2xl text-center tracking-tighter text-white bg-blue-600 rounded-lg">
                Deposit
              </h1>
              <div className="w-full h-[180px] overflow-hidden">
                <img
                  className="w-full h-full object-center"
                  src={pay1}
                  alt=""
                />
              </div>
              <p className="p-4 text-base font-regular">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                quibusdam quod consectetur, dolores amet eius libero unde
                similique. Iusto expedita dicta porro.
              </p>
              <h2 className="p-4 text-center text"></h2>
              <h4 className="p-4 text-center font-light text-sm">
                * Terms and conditions applied *
              </h4>
              <button className="w-full bg-blue-600 rounded-md text-white p-4 text-lg">
                Pay Now
              </button></div>
          </div>
        </main>
      </div>
    )
}
export default StudentDashboard