import React from 'react'

import gold from "./1st.png";

import silver from "./2nd.png";
import bronze from "./3rd.png";

import user2 from "./user2.png";
import top from "./top3.png";
import { NavLink } from 'react-router-dom';
const Question = () => {
  return (
    <div className='w-screen flex justify-center bg-slate-100 items-center h-screen font-classy'>
      <div className='w-3/4 h-[500px] flex rounded-r-3xl bg-[#3c003e]'> 
      
      <div  className='w-1/3 text-white  text-center flex  flex-col  gap-4 justify-center items-center'>
      <div className=' flex items-center'>
        <img src={user2} className='w-12 ' alt="" />
        <h1 className='text-5xl font-bold cursor-pointer ml-4'>SHAGUN</h1>
      </div>
      <NavLink to="Editprofile">
        <h1 className='cursor-pointer underline hover:scale-105 transition-transform duration-200 italic underline-offset-2'> Edit Profile </h1>
        </NavLink>
    <div className='bg-white text-black p-3 rounded-3xl w-72'>
        <h3 className='text-xl font-bold shadow-md '>Your Top 3 Score</h3>
          <div className='flex gap-3  text-xl'> 
            <table>
              <tr >
                <td >
            <img src={gold} alt=""  className='w-8  '/> 
           </td>
            <td className='w-24 border-r-2'>Node Js</td>
            <td className='w-24'>8.4</td>
            </tr>
              <tr>
                <td>
            <img src={silver} alt=""  className='w-10'/> 
           </td>
            <td className='w-24 border-r-2'>Node Js</td>
            <td className='w-24'>8.4</td>
            </tr>
              <tr>
                <td>
            <img src={bronze} alt=""  className='w-8'/> 
           </td>
            <td className='w-24 border-r-2'>Node Js</td>
            <td className='w-24'>8.4</td>
            </tr>
                  </table>
                  </div>
                  </div>

      </div>
      <div className='bg-white w-[70%] rounded-r-[50px]'>
        <div className='flex items-center gap-2 justify-center'>
        <h1 className='text-4xl font-bold text-center mt-3'>Your Score </h1>
           <img src={top}  className="h-8 mt-4" alt="" />
           </div>
      <table className="w-full mt-3 text-2xl text-center">
              <tr className="border-b-2  border-black">
              <th>Rank</th>
              <th>Subject Name</th>
              <th>Score</th>
              <th>Date</th>
              </tr>
              <tr >
            <td >6</td>
            <td>JS</td>
            <td>5.5 </td>
            <td>14/3/2024</td>
            </tr>
              <tr >
            <td>4</td>
            <td>Node Js</td>
            <td >8.2 </td>
            <td >11/3/2024</td>
            </tr>
              
              <tr >
            <td>2</td>
            <td>JS</td>
            <td >9.1 </td>
            <td >11/3/2024</td>
            </tr>
              
              <tr >
            <td>3</td>
            <td>C</td>
            <td >8.5 </td>
            <td >11/3/2024</td>
            </tr>
              
              <tr >
            <td>1</td>
            <td>Node Js</td>
            <td >9.2 </td>
            <td >11/3/2024</td>
            </tr>
              
              <tr >
            <td>5</td>
            <td>Node Js</td>
            <td >8.2 </td>
            <td >11/3/2024</td>
            </tr>
              
              <tr >
            <td>7</td>
            <td>Node Js</td>
            <td >3.2 </td>
            <td >11/3/2024</td>
            </tr>
              
            
            </table>


      </div>
      </div>
      
    </div>
  )
}

export default Question
