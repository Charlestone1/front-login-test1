import React from 'react'
import { useRef } from "react";
import { Link } from "react-router-dom"
import UserDashboard from '../UserDashboard';


const Login = () => {
  const email = useRef();
  const password = useRef();

  const getEmail = localStorage.getItem("emailData"); 
  const getPassword = localStorage.getItem("passwordData"); 

  const handleSubmit = () => {
    if (email.current.value === "charles@gmail.com" && password.current.value === "123456") {
      localStorage.setItem("emailData", "charles@gmail.com")
      localStorage.setItem("passwordData", "123456")
    }
  }
  return (
      <div className="h-screen w-full flex justify-center items-center bg-gray-800 ">
      {getEmail && getPassword? <UserDashboard /> : 
        <div className=" flex flex-col justify-center">
        <form onSubmit={handleSubmit}y className="max-w-[400px] min-w-[360px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg ">
          <h2 className="text-4xl dark: text-white font-bold text-center">
            Login
          </h2>
          <div className="flex flex-col text-gray-400 py-2 text-left">
            <label htmlFor="Username">User Email</label>
            <input required ref={email}
              className="_email rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none "
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2 text-left">
            <label htmlFor="password ">Password</label>
            <input required ref={password}
              className="_password rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none "
              type="password"
              name="password"
            />
          </div>
          
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 rounded-lg text-white font-semibold">
            Login
          </button>
          <div className="flex justify-between text-gray-400 py-2 ">
            <p>Forgot Password?</p> 
            <Link to="/recover_password" className="text-teal-500">Recover Now</Link>
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="font-thin">
              Don't have an account?
            </p>
            <Link to="/signup" className="underline text-teal-500">Create Account</Link>
          </div>
        </form>
      </div> }
    </div>
  )
}

export default Login