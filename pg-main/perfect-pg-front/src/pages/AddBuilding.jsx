import { useState } from "react"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux"
import { createProperty } from "../redux/slice/propertySlice";

const AddBuilding=()=>{
    const dispatch=useDispatch()
    const [category, setCategory] = useState('');
    const [propertyData,setPropertyData]=useState({
        name:"",
        discription:"",
        category:"",
        address:"",
        city:"",
        state:"",
        zipCode:"",
        facilities:"",
        
    })
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (e) => {
        console.log(e.target.files);
      if (e.target.files) {
        const filesArray = Array.from(e.target.files);
        
        setSelectedImages((prevImages) => prevImages.concat(filesArray));
      }
    };
    function handelPropertyData(e){
        const {name,value}=e.target 
        setPropertyData({
            //set all the values as it is
            ...propertyData,
            //change the fullName to new value
            [name]:value,
        })
    }
    async function onSubmit(e){
        e.preventDefault()
      
        if(!propertyData.name || !propertyData.discription || !category || 
            !propertyData.address || !propertyData.city ||!propertyData.state 
            ||!propertyData.zipCode || !propertyData.facilities){
            toast.error("Please fill all the details")
            return
        }
       
        const formData=new FormData()
      formData.append("name",propertyData.name)
      formData.append("discription",propertyData.discription)
      formData.append("category",category)
      formData.append("address",propertyData.address)
      formData.append("city",propertyData.city)
      formData.append("state",propertyData.state)
      formData.append("zipCode",propertyData.zipCode)
      formData.append("facilities",propertyData.facilities)
      selectedImages.forEach((image) => {
        formData.append('propertyPhoto', image);
      });

      const response=await dispatch(createProperty(formData))
      console.log(response?.payload);
      if(response?.payload?.sucess){
        setPropertyData({
            name:"",
            discription:"",
            category:"",
            address:"",
            city:"",
            state:"",
            zipCode:"",
            facilities:"",
        })
        setSelectedImages([])
      }
    }
    return(
        <>
         <div className="flex justify-around items-center gap-8 p-4">
          <div className="flex justify-center items-center w-[500px] h-[450px] bg-blue-600 border-2 p-4 rounded-2xl shadow-2xl">
            <h1 className="text-3xl font-semibold text-white">Add Property</h1>
          </div>
          <div className="w-2/4 h-full bg-slate-200 border-2 shadow-md rounded-2xl px-4 py-3">
            <form
              className="flex flex-col justify-center"
              onSubmit={onSubmit}
            >
              <div className="mb-5 flex flex-col">
                <label htmlFor="name" className=" block font-medium">
                  Property Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handelPropertyData}
                  required={true} 
                  value={propertyData.name}
                  id="name"
                  placeholder="Property Name"
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>

        <div className="mt-5 flex flex-col">
        <label className="block font-medium mb-2">Category</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="boy"
            name="category"
            value="Boy"
            checked={category === 'Boy'}
            onChange={(e) => setCategory(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="boy" className="mr-4">Boy</label>
          <input
            type="radio"
            id="girl"
            name="category"
            value="Girl"
            checked={category === 'Girl'}
            onChange={(e) => setCategory(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="girl" className="mr-4">Girl</label>
          <input
            type="radio"
            id="co"
            name="category"
            value="Co"
            checked={category === 'Co'}
            onChange={(e) => setCategory(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="co">Co</label>
        </div>
      </div>
              <div className="mb-5 flex flex-col">
                <label htmlFor="facilities" className=" block font-medium">
                  Facilities
                </label>
                <input
                  type="text"
                  name="facilities"
                  onChange={handelPropertyData}
                  required={true} 
                  value={propertyData.facilities}
                  id="facilities"
                  placeholder="Facilities"
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label htmlFor="property_photos" className=" block font-medium">
                  Property Photos
                </label>
                <input
                  type="file"
                  name="property_photos"
                  id="property_photos"
                  multiple
                  onChange={handleImageChange}
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
                </label>
                <textarea
                  rows="4"
                  name="discription"
                  id="message"
                  onChange={handelPropertyData}
                  required={true} 
                  value={propertyData.discription}
                  placeholder="Type your message"
                  className="w-1/2 rounded-md resize-none border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                ></textarea>
              </div>
              <div className="mb-5 flex flex-col">
                <label htmlFor="address" className=" block font-medium">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={handelPropertyData}
                  required={true} 
                  value={propertyData.address}
                  placeholder="Address"
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="mb-5 flex flex-col">
                  <label
                    htmlFor="city"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={handelPropertyData}
                  required={true} 
                  value={propertyData.city}
                    placeholder="City"
                    className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                  />
                </div>
                <div className="mb-5 flex flex-col">
                  <label
                    htmlFor="state"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    onChange={handelPropertyData}
                  required={true} 
                  value={propertyData.state}
                    placeholder="State"
                    className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                  />
                </div>
                <div className="mb-5 flex flex-col">
                  <label
                    htmlFor="zipCode"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Zipcode
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    onChange={handelPropertyData}
                  required={true} 
                  value={propertyData.zipCode}
                    placeholder="zipCode"
                    className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                  />
                </div>
              </div>

              <div>
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
        </>
    )
}
export default AddBuilding