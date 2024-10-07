import React from 'react'

import java from "./java.jpg";
import js from "./js.jpeg";
import c from "./c.jpg";
import LikeCard from './LikeCard';
const Like = () => {
  return (
    <div className='px-20'>
      <div className='w-full pt-3'>
      <div className=' flex flex-col text-center'>
        <h1 className='text-2xl font-bold my-3'>Your Like's 💜</h1>
     
            <LikeCard img={js} name={"JS"}/>
            <LikeCard img={java} name={"JAVA"}/>
            <LikeCard img={c} name={"C"}/>
            </div> 
           
          </div>
    </div>
  )
}

export default Like
