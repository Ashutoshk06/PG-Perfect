import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helper/axiosInstance";
import toast from "react-hot-toast";



const paymentSlice=createSlice({
    name:"payment",
    initialState:{
        key:"",
        subscription_id:"",
        isPaymentVarified:false,
        allPayments:{},
        finalMonths: {},
        monthlySalesRecord: []
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getRazorpayId.fulfilled,(state,action)=>{
            //this action?.payload?.key (.key should be simelar to what we return from backend)
            state.key=action?.payload?.key
        })
        builder.addCase(buySubscription.fulfilled,(state,action)=>{
            state.subscription_id=action?.payload?.subscriptionId
        })
        builder.addCase(varifySubscribtion.fulfilled,(state,action)=>{
            //As when we return res.status(200).json({sucess:....,message:}) from here we need sucess 
            // toast.success(action?.payload?.message)
            
            state.isPaymentVarified=action?.payload?.sucess
        })
        // builder.addCase(varifySubscribtion.rejected,(state,action)=>{
            //As when we return res.status(200).json({sucess:....,message:}) from here we need sucess 
            // toast.success(action?.payload?.message)
            // state.isPaymentVarified=action?.payload?.sucess
        // })
        builder.addCase(getAllSubscription.fulfilled,(state,action)=>{
            state.allPayments=action?.payload?.result?.subscriptionDetails
            state.finalMonths=action?.payload?.result?.finalMonths
            state.monthlySalesRecord=action?.payload?.result?.monthlySalesRecord
        })
    }
})

export const getRazorpayId=createAsyncThunk("/razorpay/getId",async ()=>{
    try{
        const response=axiosInstance.get("/owner/paymentKey")
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})

export const buySubscription=createAsyncThunk("/razorpay/buy",async (data)=>{
    try{
        const response=axiosInstance.post("/payment/subscribe",data)
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})

export const varifySubscribtion=createAsyncThunk("/razorpay/verify",async (data)=>{
    try{
        
        const response=axiosInstance.post("/owner/verify",{
            razorpay_payment_id: data.payment_id,
            razorpay_signature: data.signature,
            razorpay_subscription_id: data.subscription_id
        })
        return (await response).data

    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})

export const getAllSubscription=createAsyncThunk("/razorpay/getsubscription",async ()=>{
    try{
        //As we require value of count to queary out data 
        //given in backend as const count=req.query
        const response=axiosInstance.get("/payment/getAllSubscription?count=10")
        toast.promise(response, {
            loading: "Getting the payment records",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to get payment records"
        })
        return (await response).data
    }
    catch(err){
        toast.error(err?.response?.data?.message)
    }
})

export const { } = paymentSlice.actions;
export default paymentSlice.reducer;