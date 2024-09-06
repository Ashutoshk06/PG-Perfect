import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { complainResolveByOwner, getAllComplain } from "../redux/slice/propertySlice";


function ShowBuilding() {
    const {state}=useLocation()
    const navigate=useNavigate()
    const {complainData}=useSelector((store)=>store.property)
    console.log(complainData); 
    const dispatch=useDispatch()
    console.log(state);
    const [totalRooms,setTotalRooms]=useState(0)
    async function calNoofRooms(){
        let t = 0;
        const totalRooms = Object.values(state.cards.rooms).map(roomArray => roomArray.length )
        for(let i=0;i<totalRooms.length;i++){
            t=t+totalRooms[i]
        }
          setTotalRooms(t)
        const response=await dispatch(getAllComplain(state.cards._id))
        console.log(response?.payload);
    }
    // async function handelresolve(complainId){
    //     await dispatch(complainResolveByOwner(complainId))
    // }
    useEffect(()=>{
        calNoofRooms()
    },[])

  const tdStyle = {
    borderBottom: "2px",
    borderColor: "#e2e8f0",
    padding: "2px",
    fontSize: "0.875rem",
  };
  return (
    <>
      <div>
        <nav className="h-[85px] border-b-2"></nav>
        <div className="flex justify-center items-center relative">
          <div className="text-center text-2xl w-[250px] border-2 rounded-md bg-blue-600 text-white px-4 py-2">
            Building Name
          </div>
          <div>
            <a
             onClick={()=>navigate("/adduser" ,{state:{state}}) }
              
              className="absolute top-2 right-20 bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Add Tenants
            </a>
          </div>
        </div>
        <div className="carrousel mt-6 bg-slate-200 w-full h-[500px] mb-10"></div>
        <div className="property_data flex flex-col items-center w-full h-min p-6">
          <h1 className="text-center font-semibold tracking-tighter text-2xl mb-2 ">
            Property Data
          </h1>
          <div className="flex w-[100%] flex-wrap justify-center gap-2 text-base bg-slate-200 p-4 text-black rounded-lg">
            <h4 className="shadow-lg w-1/2 bg-white rounded-lg h-10 px-4 py-2">
              <span className="tracking-tight font-semibold mr-2">Property Name:</span> {state.cards.name}
            </h4>
            <h4 className="shadow-lg w-1/2 bg-white rounded-lg h-10 px-4 py-2">
            <span className="tracking-tight font-semibold mr-2">Property Category:</span> {state.cards.category}
            </h4>
            <h4 className="shadow-lg w-1/2 bg-white rounded-lg h-10 px-4 py-2">
            <span className="tracking-tight font-semibold mr-2">Facilities:</span> {state.cards.facilities}
              
            </h4>
            <h4 className="shadow-lg w-1/2 bg-white rounded-lg h-10 px-4 py-2">
            <span className="tracking-tight font-semibold mr-2">Number of Rooms:</span> {totalRooms}
              
            </h4>
            <div className="w-1/2 flex justify-between">
              <h4 className="shadow-lg w-1/4 bg-white rounded-lg h-10 px-4 py-2">
              <span className="tracking-tight font-semibold mr-2">Description:</span> 
                
              </h4>
              <p className="shadow-lg w-[520px] p-2 h-24 bg-white rounded-md">{state.cards.discription}</p>
            </div>
            <h4 className="shadow-lg w-1/2 bg-white rounded-lg flex gap-5 h-10 px-4 py-2">
            <span className="tracking-tight font-semibold ">Address:</span> {state.cards.address}
            </h4>
            <h4 className="shadow-lg w-1/2 bg-white rounded-lg flex gap-5 h-10 px-4 py-2">
            <span className="tracking-tight font-semibold">State:</span> {state.cards.state}
            <span className="tracking-tight font-semibold">City:</span> {state.cards.city}
            </h4>
          </div>
        </div>
        <div className="tenants_data p-6">
          <div class="header_fixed max-h-screen w-full overflow-auto border border-gray-300">
            <h1 className="text-center font-semibold tracking-tighter text-2xl mb-2">
              Complaints Data
            </h1>
            <table className="w-full border-collapse">
              <thead>
             
                <tr>
                  <th className="sticky top-0 bg-blue-600 text-gray-200 text-md p-2 pr-[35%] border-b border-gray-300">
                    S No.
                  </th>
                  <th className="sticky top-0 bg-blue-600 text-gray-200 text-md p-2 pr-[35%] border-b border-gray-300">
                  Title
                  </th>
                  <th className="sticky top-0 bg-blue-600 text-gray-200 text-md p-2 pr-[35%] border-b border-gray-300">
                  type
                  </th>
                  <th className="sticky top-0 bg-blue-600 text-gray-200 text-md p-2 pr-[35%] border-b border-gray-300">
                  Description
                  </th>
                  {/* <th className="sticky top-0 bg-blue-600 text-gray-200 text-md p-2 pr-[35%] border-b border-gray-300">
                    Room Sharing
                  </th> */}
                  <th className="sticky top-0 bg-blue-600 text-gray-200 text-md p-2 pr-[35%] border-b border-gray-300">
                    {" "}
                    Complaint
                  </th>
                </tr>
              </thead>
              <tbody>
              { complainData.map((ele,idx)=>{
                return(
                <tr>
                  <td className="hover:bg-white border-b border-gray-300 p-2 text-sm">
                    {idx+1}
                  </td>
                  <td className="hover:bg-white border-b border-gray-300 p-2 text-sm">
                    {ele?.title}
                  </td>
                  <td className="hover:bg-white border-b border-gray-300 p-2 text-sm">
                    {ele.type}
                  </td>
                  <td className="hover:bg-white border-b border-gray-300 p-2 text-sm">
                    {ele.description}
                  </td>
                  {/* <td className="hover:bg-white border-b border-gray-300 p-2 text-sm">
                    {ele.guest.room.roomShearing}
                  </td> */}
                  <td className="hover:bg-white border-b border-gray-300 p-2 text-sm">
                    <button
                      className="border-none px-5 py-2 rounded-full bg-blue-600 text-gray-200"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      View Complaint
                    </button>
                    <button  className="ml-2 border-none px-5 py-2 rounded-full bg-blue-600 text-gray-200">
                      
                      Resolve
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="w-[700px] h-[350px] modal-box px-4 py-3">
                        <h1 className="underline text-center font-bold text-2xl tracking-tighter mb-4">
                          Complaint!
                        </h1>
                        <h4 className="complaints text-xl font-semibold mb-4">{ele.title}</h4>
                        <p className="complaint_details text-base font-regular mb-4">
                          {ele.description}
                        </p>
                        <div className="images flex mb-4 gap-6">
                            {ele.photos.map((img)=>{
                                return(
                           <img className="w-[200px] h-[150px] rounded-lg object-center" src={img.secure_url} alt="" />
                                )
                            })}
                            
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn bg-blue-600 px-4 py-2 text-white rounded-md">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>
                </tr>
                )
             })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowBuilding;