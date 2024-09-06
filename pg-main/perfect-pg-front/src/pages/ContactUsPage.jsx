import { useState } from "react"
import toast from "react-hot-toast"
import { FaPhone } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6"
import {MdOutgoingMail}  from "react-icons/md"
import { contactAdmin } from "../redux/slice/userSlice"
import { useDispatch } from "react-redux"
const ContactUs=()=>{
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    })
    function handelForm(e){
        const {name,value}=e.target 
        setFormData({
            //set all the values as it is
            ...formData,
            //change the fullName to new value
            [name]:value
        })
    }
    async function onSubmit(e){
        e.preventDefault()
        console.log(formData);
        if(!formData.name || !formData.email || !formData.phone || !formData.message){
            toast.error("Please fill all the details")
            return
        }
        const response=await dispatch(contactAdmin(formData))
        if(response?.payload?.sucess){
            console.log(response);
            setFormData({
                name:"",
                email:"",
                phone:"",
                message:"",
            
            })
    }
}
    return(
        <div>
        <nav className="h-[85px] border-b-2"></nav>
        <div className="ml-4 flex flex-wrap justify-center gap-20 p-8">
          <div className="building_card border-2 w-96 h-72 bg-slate-100 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-full h-[200px] flex justify-center overflow-hidden">
              <MdOutgoingMail className="text-[200px] text-slate-700" />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-slate-700">
              <a
                href="/"
                className="mt-[1px] text-2xl font-semibold tracking-tighter hover:text-slate-700"
              >
                Email Address
              </a>
              <h4 className="font-light tracking-tight underline decoration-1">
              mandanmishra11@gmail.com
              </h4>
            </div>
          </div>
          <div className="building_card border-2 w-96 h-72 bg-slate-100 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-full h-[200px] flex justify-center items-center overflow-hidden">
              <FaPhone className="text-[120px] text-slate-700" />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-slate-700">
              <a
                href="/"
                className="mt-[1px] text-2xl font-semibold tracking-tighter hover:text-slate-700"
              >
                Phone Number
              </a>
              <h4 className="font-light tracking-tight underline decoration-1">
              6388722015
              </h4>
            </div>
          </div>
          <div className="p-1 building_card border-2 w-96 h-72 bg-slate-100 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-full h-[200px] flex justify-center items-center overflow-hidden">
              <FaMapLocationDot className="text-[120px] text-slate-700" />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-slate-700">
              <a
                href="/"
                className="text-2xl font-semibold tracking-tighter hover:text-slate-700"
              >
                Company Address
              </a>
              <h4 className="font-light tracking-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h4>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center">
          <div className="w-[50%] border-[1px] border-blue-600 shadow-md bg-white rounded-md p-4">
            <div className="ml-10 mb-2">
              <h1 className="border-l-2 border-slate-400 bg-slate-200 w-48 h-10 px-2 text-3xl tracking-tighter font-semibold">
                Get a quote
              </h1>
            </div>
            <div className="flex justify-center relative">
              <form noValidate onSubmit={onSubmit}>
                <div className="div1 w-full flex justify-start gap-8">
                  <div className="mb-5 flex flex-col">
                    <label htmlFor="name" className="block font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required={true} 
                      value={formData.name}
                      onChange={handelForm}
                      placeholder="Name"
                      className="w-[300px] rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label htmlFor="email" className="block font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required={true} 
                      value={formData.email}
                      onChange={handelForm}
                      placeholder="Email"
                      className="w-[300px] rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="div2 w-full flex justify-start gap-8">
                  <div className="mb-5 flex flex-col">
                    <label htmlFor="phone" className="block font-medium">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      required={true} 
                      value={formData.phone}
                      onChange={handelForm}
                      placeholder="Phone Number"
                      className="w-[300px] rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5 flex flex-col">
                    <label htmlFor="message" className="block font-medium">
                      Issue
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      required={true} 
                      value={formData.message}
                      onChange={handelForm}
                      placeholder="Type your message"
                      className="w-[300px] rounded-md resize-none border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                    ></textarea>
                  </div>
                </div>
                <div className="absolute bottom-[10%] left-[7%]">
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#2563eb] py-3 px-12 text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    )
}
export default ContactUs