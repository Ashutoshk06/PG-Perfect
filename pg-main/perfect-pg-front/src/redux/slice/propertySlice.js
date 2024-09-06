import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../helper/axiosInstance";

export const createProperty=createAsyncThunk("/property/create",async (data)=>{
    try{
        const response=axiosInstance.post("/owner/property/add",data)
        toast.promise(response,{
            loading:"Adding new property",
            sucess:"property added sucessfully",
            error:"Failed to add property"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err)
    }
})

export const deleteProperty=createAsyncThunk("/property/delete",async(propertyId)=>{
    try{
        const response=axiosInstance.delete(`/owner/property/delete/${propertyId}`)
        toast.promise(response,{
            loading:"Deleting property...",
            success:"property deleted successfully",
            error:"Failed in deleting the property"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})

export const getAllProperty=createAsyncThunk("/property/getallproperty",async()=>{
    try{
        const response=axiosInstance.get(`/owner/property/getallproperty`)
        toast.promise(response,{
            loading:"Loading data...",
            success:"property fetched successfully",
            error:"Failed to fetch property info"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})
export const getPropertyById=createAsyncThunk("/property/getproperty",async(propertyId)=>{
    try{
        const response=axiosInstance.get(`/owner/property/${propertyId}`)
        toast.promise(response,{
            loading:"Loading data...",
            success:"property fetched successfully",
            error:"Failed to fetch property info"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})
export const getAllComplain=createAsyncThunk("/allcomplains",async(propertyId)=>{
    try{
        const response=axiosInstance.get(`/owner/allcomplains/${propertyId}`)
        
        toast.promise(response,{
            loading:"Fetching All Complains...",
            success:"Complain fetched successfully",
            error:"Failed to fetch complains"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})
export const complainResolveByOwner=createAsyncThunk("resolvecomplain",async (complainId)=>{
    try{
        const response=axiosInstance.post(`/owner/resolvecomplain/${complainId}`)
        toast.promise(response,{
            loading:"Updating...",
            success:"Update successfully",
            error:"Failed to Update"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})

const propertySlice=createSlice({
    name:"property",
    initialState:{
    propertyData:[],
    complainData:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProperty.fulfilled,(state,action)=>{
        
            state.propertyData=[...action?.payload?.data]
           
        })
        builder.addCase(getAllComplain.fulfilled,(state,action)=>{
        
            state.complainData=[...action?.payload?.data]
        })
        builder.addCase(complainResolveByOwner.fulfilled,(state,action)=>{
        
            state.complainData=[...action?.payload?.data]
        })
    }
})
export const { } = propertySlice.actions;
export default propertySlice.reducer;