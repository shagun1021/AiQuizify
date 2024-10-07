import React from 'react'
import java from "./java.jpg";
import js from "./js.jpeg";
import c from "./c.jpg";
import remin from "./remin.png";
import ReminderCard from './ReminderCard';

import python from "./python.png";
const Reminder = () => {
  return (
    <div className='px-20 '>
  <div className='mt-3 flex flex-col w-full'>
    <div className='flex w-full justify-center items-center gap-3'>
    <h1 className='text-2xl font-bold my-3'>Your Reminder
     
      
    </h1>
    <img src={remin} className='w-8 h-8' alt="" />
    </div>
        <ReminderCard img={java} name={"JAVA"}/>
        <ReminderCard img={js} name={"JS"}/>
        <ReminderCard img={c} name={"C"}/>
        <ReminderCard img={java} name={"JAVA"}/>
        <ReminderCard img={python} name={"Python"}/>
        </div> 
       
</div>
  )
}

export default Reminder
