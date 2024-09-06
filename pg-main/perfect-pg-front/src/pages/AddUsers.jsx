import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGuest, createSubscription, sendLoginIdToGuest } from "../redux/slice/ownerSlice";
import { useLocation } from "react-router-dom";

function TenantForm() {
    const dispatch=useDispatch()
    const {state}=useLocation()
    const cards=state.state.cards
    console.log(cards);
    const [userData,setUserData]=useState({
        name:"",
        phone:"",
        email:"",
        roomType:"",
        roomNo:"",
        propertyId:cards._id
    })
    const [subscriptionData,setsubscriptionData]=useState({
       userId:"",
       amount:""
    })
    function handelFormData(e){
        const {name,value}=e.target 
        setUserData({
            //set all the values as it is
            ...userData,
            //change the fullName to new value
            [name]:value,
            
        })
    }
    async function handelSubscriptionData(e){
        const {name,value}=e.target 
        setsubscriptionData({
            //set all the values as it is
            ...subscriptionData,
            //change the fullName to new value
            [name]:value
        })
    }
    async function onSubmit(e){
        e.preventDefault()
        if(!userData.name || !userData.phone || !userData.email || !userData.roomType || !userData.roomNo ||!subscriptionData.amount){
            toast.error("Please fill all the details")
            return
        }
        console.log(userData.propertyId);
        const response=await dispatch(addGuest(userData))
        if(response?.payload?.sucess){
            const userId=response?.payload?.data?._id
            const sendData={userId:userId,amount:subscriptionData.amount}
            const responseSub=await dispatch(createSubscription(sendData))

            if(responseSub?.payload?.sucess){
                console.log(userId);
                const responseMessage=await dispatch(sendLoginIdToGuest(userId))
                console.log(responseMessage?.payload);
                if(responseMessage?.payload?.sucess){
                setUserData({
                    name:"",
                    phone:"",
                    email:"",
                    roomType:"",
                    roomNo:"",
                    propertyId:""
                })
                setsubscriptionData({
                     userId:"",
                     amount:""
                })
            }
            }
        }
       console.log(response?.payload);
    }

  return (
    <>
      <div className="w-full h-screen">
        {/* <nav className="h-[85px] py-4 px-10 flex items-center gap-28 border-b-2">
          <div className="text-3xl font-bold tracking-tighter">
            <a href="/">LOGO</a>
          </div>
          <div className="flex justify-between items-center w-full">
            <h4 className="rounded-lg text-sm font-semibold py-3 px-8 bg-slate-700 text-white">
              Dashboard
            </h4>
            <div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <Button
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    startIcon={<ArrowDropDownIcon />}
                  >
                    {user.name}
                    <Avatar
                      className={classes.avatar}
                      src={user.avatar}
                      style={{
                        marginLeft: "10px",
                      }}
                    />
                  </Button>
                </div>

                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </nav> */}
        <div className="flex justify-around items-center gap-8 p-4">
          <div className="flex justify-center items-center w-[500px] h-[450px] bg-blue-600 border-2 p-4 rounded-2xl shadow-2xl">
            <h1 className="text-3xl font-semibold text-white">Add Tenant</h1>
          </div>
          <div className="w-2/4 h-[580px] bg-slate-200 border-2 shadow-md rounded-2xl px-4 py-3">
            <form
              className="flex flex-col justify-center"
              onSubmit={onSubmit}
            >
              <div className="mb-5 flex flex-col">
                <label htmlFor="name" className=" block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handelFormData}
                  required={true} 
                  value={userData.name}
                  id="name"
                  placeholder="Full Name"
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label htmlFor="email" className=" block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required={true} 
                  onChange={handelFormData}
                  value={userData.email}
                  placeholder="Email"
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label htmlFor="phone" className=" block font-medium">
                  Phone Number
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  onChange={handelFormData}
                  required={true} 
                  value={userData.phone}
                  placeholder="Phone Number"
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label htmlFor="roomShare" className=" block font-medium">
                  Room Sharing
                </label>
                <input
                  type="number"
                  name="roomType"
                  id="roomShare"
                  onChange={handelFormData}
                  required={true} 
                  value={userData.roomType}
                  placeholder="Room Sharing"
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label htmlFor="roomNumber" className=" block font-medium">
                  Room Number
                </label>
                <input
                  type="number"
                  name="roomNo"
                  id="roomNumber"
                  onChange={handelFormData}
                  required={true} 
                  value={userData.roomNo}
                  placeholder="Room Number"
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label htmlFor="amount" className=" block font-medium">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  onChange={handelSubscriptionData}
                  placeholder="Amount"
                  className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-black outline-none focus:border-blue-600 focus:shadow-md"
                />
              </div>
              <div>
                <button type="submit" className="hover:shadow-form rounded-md bg-[#2563eb] py-3 px-12 text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TenantForm;