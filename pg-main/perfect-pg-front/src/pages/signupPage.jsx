import { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { emailMatch } from '../helper/regexMatch';
import { createAccount } from '../redux/slice/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage=()=>{
    const [count, setCount] = useState(0)
   const navigate=useNavigate()
  const [Password,setpassword] = useState("")
  const[visible1 , setvisble1] = useState(false)
  const[visible2 , setvisble2] = useState(false)
  const [CreatePassword,setCreatePassword] = useState("")

  const dispatch=useDispatch()
  const [signUpData,setSignUpData]=useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    })
    function handelSignup(e){
        const {name,value}=e.target 
        setSignUpData({
            //set all the values as it is
            ...signUpData,
            //change the fullName to new value
            [name]:value
        })
    }
    function handelConfirmPass(e){
        setCreatePassword(e.target.value) 
        const {name,value}=e.target 
        setSignUpData({
            //set all the values as it is
            ...signUpData,
            //change the fullName to new value
            [name]:value
        })
    }
    async function onSubmit(e){
        e.preventDefault()
        if(CreatePassword!=Password){
            toast.error("Confirm Password did not match")
            return
        }
        if(!signUpData.email || !signUpData.password || !signUpData.name || !signUpData.phone){
            toast.error("Please fill all the details")
            return
          }
          if(!emailMatch(signUpData.email)){
            toast.error("Email not valid")
            return
          }
          const response=await dispatch(createAccount(signUpData))
          
          if(response?.payload?.sucess){
            console.log(response);
            setSignUpData({
              name:"",
              email:"",
              password:"",
              phone:"",
            })
            navigate("/admindashboard")
    
          }
    }

    return(
        <>
        <div className='body h-screen mb-10 '>

<div className='main flex justify-center items-center h-full m-10 shadow-md  rounded-2xl'>

  <div className="leftContainer bg-blue-600 h-full w-1/2 rounded-l-2xl  ">

    <h1 className='m-5 text-white font-bold text-5xl text-center'>Join  Us and Unlock Endless Possibilities!</h1>

    <p className='text-white text-lg m-10 text-center'>Welcome to PG PERFECT! Log in to manage your PG digitally. Easily update listings, track bookings, and streamline operations with our intuitive platform. Simplify your PG management experience and stay connected with your tenants effortlessly.</p>



  </div >

  {/* ------right half---------- */}


  <div className="rightContainer bg-white  h-full w-1/2 rounded-r-2xl ">
    <div className="left_main m-5">

      <div className="upper flex justify-between ">

        <div className="uppertext text-md font-bold left-0">Sign up to <br /> <span className='text-blue-600 text-lg font-extrabold'>PG PERFECT</span></div>

        <div className="text-md right-0 text-slate-400 ">Already have account? <br /><Link to="/login"><span className='text-lg text-black hover:font-bold cursor-pointer'> Log in here</span></Link>
        </div>
      </div>


    </div>

    <div className="lower flex justify-center">


    <div className="form w-[60%]">

      <form noValidate onSubmit={onSubmit}>
        <div className='text-md mx-1 my-5 '>


          <h1 className='mx-1 font-semibold'>Your full name</h1>

          <div className='   flex border border-slate-400 rounded-md text-sm p-2'>

            <input type="text" 
            onChange={handelSignup}
            id='first_name' 
            name='name'
            required={true} 
            placeholder='Enter your full name'
            value={signUpData.name}
            className='mx-1   rounded-sm px-1 w-[100%] focus:outline-none' />
          </div>
        </div>
        <div className='text-md mx-1 my-5'>


          <h1 className='mx-1 font-semibold'>Your Email Address</h1>
          <div className='   flex border border-slate-400 rounded-md p-2 text-sm'>

            <input type="text" 
            
            id='first_name' 
            name='email'
            onChange={handelSignup}
            required={true} 
            value={signUpData.email}
            placeholder='Enter email address'
            className='mx-1   rounded-sm px-1 w-[100%] focus:outline-none' />
          </div>
        </div>
        <div className='text-md mx-1 my-5'>

        <h1 className='mx-1 font-semibold'>Your Phone number</h1>
          <div className='   flex border border-slate-400 rounded-md p-2 text-sm'>

            <input type="text" 
            onChange={handelSignup}
            id='first_name' 
            name='phone'
            placeholder='Enter phone number'
            required={true} 
            value={signUpData.phone}
            
            className='mx-1   rounded-sm px-1 w-[100%] focus:outline-none' />
          </div>
        </div>
        <div className='text-md mx-1 my-5'>


          <h1 className='mx-1 font-semibold'>Create a Password</h1>

          <div className='   flex items-center border border-slate-400 rounded-md p-2 text-sm'>

            <input  
            value={Password}
            type = {visible1 ? "text" : "password"}
            
            id='first_name' 
            name='createPassword'
            placeholder='create a Password'
            onChange={e => setpassword(e.target.value)}
            className='mx-1   rounded-sm px-1 w-[100%] focus:outline-none ' />

            <div className="mr-1" onClick={() => setvisble1(!visible1)}>

              {visible1 ? <FaRegEye/> : <FaRegEyeSlash/>}

            </div>

            

           
          </div>
        </div>
        <div className='text-md mx-1 my-5'>


          <h1 className='mx-1 font-semibold'>Confirm Your Password</h1>

          <div className='   flex items-center border border-slate-400 rounded-md p-2 text-sm'>

            <input
            value={CreatePassword}
            type={visible2 ? "text":"password"}
            id='first_name' 
            name='password'
            placeholder='Confirm Your Password'
            onChange={  handelConfirmPass}
            className='mx-1   rounded-sm px-1 w-[100%] focus:outline-none' />
            <div className="mr-1" onClick={ () => setvisble2(!visible2)}>

              {visible2 ? <FaRegEye/> : <FaRegEyeSlash/>}

            </div>
          </div>



        </div>


         <div className='bg-blue-600  rounded-md flex items-center my-1 h-10'>
          <button type='submit' className='w-full  text-sm  font-semibold  rounded-md hover:cursor-pointer hover:text-white '>Create Account</button>
         </div>



  
      </form>
          </div>
    </div>

  </div>

</div>

</div>
        </>
    )
}

export default SignupPage