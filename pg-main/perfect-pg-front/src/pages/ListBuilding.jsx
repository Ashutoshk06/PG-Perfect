import { useState } from "react"
import { useDispatch } from "react-redux"
import { getAllProperty } from "../redux/slice/propertySlice"
import PropertyCard from "./PropertyCard"

const ListBuilding=()=>{
    const [propertyData,setPropertyData]=useState([])
    const dispatch=useDispatch()

    async function loadProperties(){
      const response=await dispatch(getAllProperty())
      if(response?.payload?.sucess){
        setPropertyData(response?.payload?.data)
      }
    }
     console.log(propertyData);
    useState(()=>{
        loadProperties()
    },[])
    return(
        <>
        <div>
        <nav className="h-[85px] border-b-2"></nav>
        <div className="ml-4 flex flex-wrap gap-20 p-8">

        {propertyData.map((ele)=>{
                           return (<PropertyCard  cards={ele} key={ele._id} />)})}
          
        </div>
      </div>
        </>
    )
}
export default ListBuilding