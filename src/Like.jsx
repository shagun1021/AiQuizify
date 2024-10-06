import React from 'react'

import java from "./java.jpg";
import js from "./js.jpeg";
import c from "./c.jpg";
const Like = () => {
  return (
    <div className='px-20'>
      <div className='w-full pt-3'>
      <div className=' flex flex-col text-center'>
        <h1 className='text-2xl font-bold my-3'>Your Like's 💜</h1>
     <div className=" mt-3 bg-white flex  shadow-2xl rounded-r-2xl h-40">
            <img src={java} className=" h-40 p-2" alt="" />
            <div className="flex justify-between  mx-4 w-full items-center ">
              <h1 className="  text-4xl">Top JAVA Interviw Questions </h1>
              <div className='flex w-[40%]'>
                <button className="bg-[#3c003e] h-[30%] w-[50%]  hover:scale-105 transition-transform duration-300 hover:bg-[#57015a] p-3 px-6 rounded-2xl text-lg text-white">
                  {" "}
                  Start Now{" "}
                </button>
                <button className="bg-[#3c003e] hover:scale-105 h-[40%] w-[50%] transition-transform duration-300 ml-4 hover:bg-[#57015a] p-3 px-6 rounded-2xl text-lg text-white">
                  {" "}
                  Remove
                </button>

                               </div>
              
            </div>
            </div>
            <div className=" mt-3 bg-white flex  shadow-2xl rounded-r-2xl h-40">
            <img src={c} className=" h-40 p-2" alt="" />
            <div className="flex justify-between  mx-4 w-full items-center ">
              <h1 className="  text-4xl">Top C Interviw Questions </h1>
              <div className='flex w-[40%]'>
                <button className="bg-[#3c003e] h-[30%] w-[50%]  hover:scale-105 transition-transform duration-300 hover:bg-[#57015a] p-3 px-6 rounded-2xl text-lg text-white">
                  {" "}
                  Start Now{" "}
                </button>
                <button className="bg-[#3c003e] hover:scale-105 h-[40%] w-[50%] transition-transform duration-300 ml-4 hover:bg-[#57015a] p-3 px-6 rounded-2xl text-lg text-white">
                  {" "}
                  Remove
                </button>

                               </div>
              
            </div>
            </div>
            <div className=" mt-3 bg-white flex  shadow-2xl rounded-r-2xl h-40">
            <img src={js} className=" h-40 p-2" alt="" />
            <div className="flex justify-between  mx-4 w-full items-center ">
              <h1 className="  text-4xl">Top JS Interviw Questions </h1>
              <div className='flex w-[40%]'>
                <button className="bg-[#3c003e] h-[30%] w-[50%]  hover:scale-105 transition-transform duration-300 hover:bg-[#57015a] p-3 px-6 rounded-2xl text-lg text-white">
                  {" "}
                  Start Now{" "}
                </button>
                <button className="bg-[#3c003e] hover:scale-105 h-[40%] w-[50%] transition-transform duration-300 ml-4 hover:bg-[#57015a] p-3 px-6 rounded-2xl text-lg text-white">
                  {" "}
                  Remove
                </button>

                               </div>
              
            </div>
            </div>
            </div> 
           
          </div>
    </div>
  )
}

export default Like
