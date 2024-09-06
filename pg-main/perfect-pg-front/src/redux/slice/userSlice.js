import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../helper/axiosInstance";


export const loginAccount=createAsyncThunk("/login",async (data)=>{
    try{
        const response= axiosInstance.post("/user/login",data)
        toast.promise(response,{
            loading:"Wait! authentication in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error:"Failed to Log in"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})
export const logoutAccountUser=createAsyncThunk("/user/logout",async ()=>{
    try{
        const response=axiosInstance.get("/user/logout")
        toast.promise(response,{
            loading: "Wait! logout in progress...",
            success: "Log out sucessful",
            error: "Failed to to log out"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})
export const  updateLogin=createAsyncThunk("updatelogin",async (data)=>{
    try{
        const response=axiosInstance.post("/user/updatelogin",data)
        toast.promise(response,{
            loading: "Wait! update login in progress...",
            success: "Update login sucessful",
            error: "Failed to update"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})
export const contactAdmin=createAsyncThunk("contactadmin",async (data)=>{
    try{
        const response=axiosInstance.post("/user/contactadmin",data)
        toast.promise(response,{
            loading: "Sending message",
            success: "Message send sucessfully",
            error: "Failed to send message"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})
export const addComplain=createAsyncThunk("/addcomplain",async (data)=>{
    try{
        const response=axiosInstance.post("/user/addcomplain",data)
        toast.promise(response,{
            loading:"Adding Complain",
            sucess:"Complain added sucessfully",
            error:"Failed to add complain"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err)
    }
})

const userSlice=createSlice({
    name:"auth",
    initialState:{
        isLoggedIn:  localStorage.getItem("isLoggedIn") || false,
        role: localStorage.getItem("role") || "",

        data: (
        localStorage.getItem('data') == undefined || 
        localStorage.getItem('data') == "undefined") 
        ?  {} : JSON.parse(localStorage.getItem('data')) 
    },
    reducers:{},
    extraReducers:(builder)=>{
       
        builder.addCase(loginAccount.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.data)),
            localStorage.setItem("isLoggedIn",(action?.payload!=undefined)?true:false),
            localStorage.setItem("role",action?.payload?.data?.role),

            state.isLoggedIn=(action.payload!=undefined)?true:false,
            state.data=action?.payload?.data,
            state.role=action?.payload?.data?.role
        })
        builder.addCase(logoutAccountUser.fulfilled,(state,action)=>{
            
            localStorage.clear(),

            state.isLoggedIn=false,
            state.data={},
            state.role=""
        
    })
    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;