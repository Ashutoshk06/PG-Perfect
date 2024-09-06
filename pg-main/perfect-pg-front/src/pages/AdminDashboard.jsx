import React, { useState } from "react";
import { LineGraph } from "./charts/Line";
import { BarChart } from "./charts/BarChart";
import { PieChart } from "./charts/Pie";
import { Link, useNavigate } from "react-router-dom";
import ComplaintsChart from "./complainsChart";
import { useDispatch } from "react-redux";
import { getAllProperty } from "../redux/slice/propertySlice";



function AdminDashboard() {
    const navigate=useNavigate()
    const [propertyData,setPropertyData]=useState([])
    const dispatch=useDispatch()

    async function loadProperties(){
      const response=await dispatch(getAllProperty())
      if(response?.payload?.sucess){
        setPropertyData(response?.payload?.data)
      }
    }
     console.log(propertyData);
    

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddTenant = () => {
      setIsModalOpen(true);
      // Additional logic to handle adding a tenant
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    useState(()=>{
      loadProperties()
  },[])
  return (
    <>
      <div className="w-[100%] h-[100%]">
        <div className="w-[100%] h-[25%]">
  

          <header className="bg-gray-300 shadow">
            <div className=" flex justify-between w-full py-4 px-10">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Welcome, Admin
              </h1>
              <div>
                 
              <div className="p-4">
      <button
        className="btn btn-primary"
        onClick={handleAddTenant}
      >
        Add Tenant
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-box bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="modal-content">
              <h2 className="text-lg font-bold mb-4 text-center">Select Property</h2>
              {/* Replace with your property listing logic */}
              <ul className="divide-y divide-gray-200">
                {propertyData && propertyData.map((data)=>{
                  return (
                  <li className="py-2">
                  <button  onClick={()=>navigate("/adduser" ,{state:{state:{cards:{...data}}}}) }
                   className="btn btn-outline btn-accent w-full">{data.name}</button>
                </li>
                  )
                })}
                
                
                {/* Add more properties dynamically */}
              </ul>
            </div>
            <div className="modal-action mt-4">
              <button
                className="btn btn-primary w-full"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

              </div>
            </div>
          </header>
        </div>
        <main className="flex  items-center gap-6 w-[100%] h-[580px] px-10 py-6">
          <div className=" bg-slate-200 flex  justify-evenly items-center w-[25%]] h-[100%] border-2 rounded-md shadow-lg px-4 py-6 w-3/4">
            {/* <div className="flex flex-col gap-16">
              <h2 className="text-2xl font-bold">Complaint</h2>
              <div classname="bg-white chart-1 hover:scale-110">
                <LineGraph width="900px" />
              </div>
              <div className="hover:scale-110">
                <BarChart />
              </div>
            </div> */}
            <div className="chart-3 mt-16 hover:scale-110">
             <ComplaintsChart />
            </div>
          </div>
          <div className="bg-slate-200 flex flex-col justify-start items-center w-[25%] h-[100%] border-2 rounded-lg shadow-lg px-4 py-6 gap-8">
            <button onClick={()=>navigate("/addbuilding")} className="w-full h-1/2 bg-blue-600 text-white hover:text-black hover:bg-white rounded-md hover:outline hover:outline-blue-600 duration-500 p-4">
              Add building
            </button>
            <button onClick={()=>navigate("/listbuilding")} className="w-full h-1/2 bg-blue-600 text-white hover:text-black hover:bg-white rounded-md hover:outline hover:outline-blue-600 duration-500 p-4">
              View Building Data &rarr;
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;