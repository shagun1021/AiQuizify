import React from 'react'
import lap from "./laptop-bg.png";
import apple from "./wapple.png";
import google from "./google.png";
import logo from "./logo.png";
import { NavLink } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#07012d] to-[#3c003e]  flex place-items-center justify-center font-classy">
   
    <div className="w-3/5 h-3/4 bg-white flex rounded-3xl ">
    <div>
    <img className=" ml-6 mt-3 w-40 absolute h-24 " src={logo} alt="" />
    </div>
      <img src={lap} className="mt-[70px]" alt="" />
      <div className="pt-20 -ml-8">
            <h1 className="text-4xl text-center -ml-14">Welcome !</h1>
            <div className="mt-10">
              <input
                type="text"
                className="border-[2px] rounded-full  w-[330px] border-gray-200 p-2 px-5 text-lg "
                placeholder="Enter Your Email" 
              />
              <input
                type="text"
                className="border-[2px] rounded-full  w-[330px] border-gray-200 p-2 px-5 mt-5 text-lg "
                placeholder="Set Password" 
              />
               <NavLink to="/Nav">
              <button className=" w-[310px] ml-2 text-white p-1 hover:bg-[#57015a] bg-[#3c003e] mt-4 rounded-full" >
                Sign Up
              </button>
              </NavLink>

              <h3 className="text-s mt-3 ml-5 ">
                Already have an account?{" "}
                <NavLink to="/Login">
                <button >
                  {" "}
                  <span className="underline cursor-pointer  text-[#3c003e]">
                    Log In
                  </span>
                </button>
                </NavLink>
              </h3>
              <button className="bg-black flex gap-3 justify-center text-white w-[330px] mt-2 rounded-full p-2">
                {" "}
                <img src={apple} alt="" className="w-5 mt-[1px] " />
                Sign Up with Apple
              </button>
              <button className="border-2 border-black flex gap-3 justify-center text-black w-[330px] mt-2 rounded-full p-2">
                {" "}
                <img src={google} alt="" className="w-5 mt-[1px] " />
                Sign Up with Google
              </button>
            </div>
          </div>


      </div>
    
      </div>
  )
}

export default Signup
