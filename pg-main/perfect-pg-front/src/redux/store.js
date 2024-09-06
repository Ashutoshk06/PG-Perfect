import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import propertySlice from "./slice/propertySlice";
import ownerSlice from "./slice/ownerSlice";
import userSlice from "./slice/userSlice";
import paymentSlice from "./slice/paymentSlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        property:propertySlice,
        owner:ownerSlice,
        user:userSlice,
        payment:paymentSlice
    },
    devTools:true
})
export default store