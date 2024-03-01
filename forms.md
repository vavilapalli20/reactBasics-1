import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn,setIsSignIn] = useState("True");

  const toggleThis = () =>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div > 
      <form className='p-12 bg-black absolute w-3/12  my-36 mt-[700px]  left-[40%]  bg-opacity-80'>
        <h1 className='m-[50px] p-[50px] text-8xl font-bold text-white'>{isSignIn?"Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input type='text' placeholder='User Name' className='mx-[120px] w-5/6 p-20 h-40 text-8xl mt-10 rounded-3xl bg-gray-600'></input>
        )}
        <input type='text' placeholder='Email Address' className='mx-[120px] w-5/6 p-20 h-40 text-8xl mt-14 rounded-3xl bg-gray-600'/>
        <input type='password' placeholder='Password' className='mx-[120px] w-5/6 p-20 h-40 text-8xl mt-14 rounded-3xl bg-gray-600'></input>
        <button className='mx-[120px] w-5/6 p-2 h-40 text-8xl mt-14 rounded-3xl bg-red-700'> {isSignIn?"Sign In" : "Sign Up"}</button>
        {isSignIn && (
          <h1 className='text-center text-5xl font-bold text-white mt-8 pt-2 mb-24'> Forgot Password</h1>
        )}
        <p className='text-6xl text-white m-[50px] p-[50px] ' onClick={toggleThis}>{isSignIn? "New to Netflix? Sign Up Now" : "Sign In" }</p>
      </form>
    </div>
  )
}


-> here we created form for sign in and after that we used useState for sign up form
-> when we are building forms how we do validation in our forms(there will be huge data in some forms like mail,pan, aadhar....)
    -> then if we have large forms we use {formic} library in react.

-> validations in forms
    ->for these we use {useRef} hook for validations
    -> we use regex for email verification.
    -> to get the data of email and password we can use useState  and also the useRef hook


export const validationCheck =(email,password) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    //const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.text(password);

    if(!isEmailValid) return "Email is not Valid";
    //if(!isPasswordValid) return "Password is not Valid";
    
    return null;
}

const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const ans=validationCheck(email.current.value,password.current.value);
    if(ans!=null) setData(false);
    else setData(true);
  }

and then here use useState for taking this value and add in the forms that password is invalid....