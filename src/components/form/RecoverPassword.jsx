import React from 'react'
import {Link} from "react-router-dom"

const RecoverPassword = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-800 ">
      <div className=" flex flex-col justify-center">
        <form className="max-w-[400px] min-w-[360px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg ">
          <h2 className="text-4xl dark: text-white font-bold text-center">
            Recover Password
          </h2>
          <div className="flex flex-col text-gray-400 py-2 text-left pt-6">
            <label htmlFor="Username">Verified Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none "
              type="email"
              name="email"
            />
          </div>
          
          
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 rounded-lg text-white font-semibold">
            submit
          </button>
          <div className="flex justify-between text-gray-400 p-2 ">
                <p className="font-thin">
                Remember Details?
                </p>
                <Link to="/" className="underline text-teal-500">Login</Link>
            </div>
          <div className="flex justify-between text-gray-400 p-2 ">
            <p className="font-thin">
              Don't have an account?
            </p>
            <Link to="/signup" className="underline text-teal-500">Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RecoverPassword