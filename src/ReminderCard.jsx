import React from 'react'

const ReminderCard = (props) => {
  const{name,img}=props
  return (
    
 <div className=" mt-3 bg-white flex  shadow-2xl rounded-r-2xl h-40">
 <img src={img} className=" h-40 p-2" alt="" />
 <div className="flex justify-between  mx-4 w-full items-center ">
   <h1 className="  text-4xl">Top {name} Interviw Questions </h1>
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
  )
}

export default ReminderCard
