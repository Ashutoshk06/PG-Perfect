import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../helper/axiosInstance";


export const createAccount = createAsyncThunk("/signup", async (data) => {
    try {

        const response =axiosInstance.post("/owner/signup", data);
        console.log(response);
        toast.promise(response, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
       
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})
export const loginAccount=createAsyncThunk("/login",async (data)=>{
    try{
        const response= axiosInstance.post("/owner/login",data)
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
export const logoutAccount=createAsyncThunk("/owner/logout",async ()=>{
    try{
        const response=axiosInstance.get("/owner/logout")
        toast.promise(response,{
            loading: "Wait! logout in progress...",
            success: "Log out sucessful",
            error: "Failed to to og out"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})
export const getOwnerDetails=createAsyncThunk("/getownerinfo",async()=>{
    try{
        const response=axiosInstance.get("/owner/getownerinfo")
        toast.promise(response,{  
            loading: "Fetching owner details",
            success: "Details fetches sucessful",
            error: "Failed to to fetched details"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})

const authSlice=createSlice({
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
        builder.addCase(createAccount.fulfilled,(state,action)=>{

            localStorage.setItem("data",JSON.stringify(action?.payload?.data)),
            localStorage.setItem("isLoggedIn",(action?.payload!=undefined)?true:false),
            localStorage.setItem("role",action?.payload?.data?.role),

            state.isLoggedIn=(action?.payload!=undefined)?true:false,
            state.data=action?.payload?.data,
            state.role=action?.payload?.data?.role
        })
        builder.addCase(loginAccount.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.data)),
            localStorage.setItem("isLoggedIn",(action?.payload!=undefined)?true:false),
            localStorage.setItem("role",action?.payload?.data?.role),

            state.isLoggedIn=(action.payload!=undefined)?true:false,
            state.data=action?.payload?.data,
            state.role=action?.payload?.data?.role
        })
        builder.addCase(logoutAccount.fulfilled,(state,action)=>{
            
            localStorage.clear(),

            state.isLoggedIn=false,
            state.data={},
            state.role=""
        
    })
    }
})

export const { } = authSlice.actions;
export default authSlice.reducer;