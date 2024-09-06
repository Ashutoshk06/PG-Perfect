import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helper/axiosInstance";
import toast from "react-hot-toast";

export const addGuest=createAsyncThunk("addguest",async(data)=>{
   try{
      const response=axiosInstance.post("/owner/addguest",data)
      toast.promise(response,{
         loading: "Adding guest details",
         success: "Guest details added sucessful",
         error: "Error to add guest details"
     })
     return (await response).data
   }
   catch(err){
      toast.error(err?.response?.data?.message)
  }
})
export const createSubscription=createAsyncThunk("/payment/subscribe",async(data)=>{
   try{
      const response=axiosInstance.post("/owner/payment/subscribe",data)
      toast.promise(response,{
         loading: "Creating subscription",
         success: "subscription created sucessful",
         error: "Error in creating subscription"
     })
     return (await response).data
   }
   catch(err){
      toast.error(err?.response?.data?.message)
  }
})
export const sendLoginIdToGuest=createAsyncThunk("/sendlogin",async (userId)=>{
   try{
      const response=axiosInstance.post(`/owner/sendlogin/${userId}`)
      toast.promise(response,{
         loading: "Message sending",
         success: "Message send sucessful",
         error: "Error in sending message"
     })
     return (await response).data
   }
   catch(err){
      toast.error(err?.response?.data?.message)
  }
})
const ownerSlice=createSlice({
     name:"guest",
     initialState:{
        guestData:[]
     },
     reducers:{},
     extraReducers:(builder)=>{
      
     }
})

export const { } = ownerSlice.actions;
export default ownerSlice.reducer;