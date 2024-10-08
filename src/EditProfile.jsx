import React from 'react'
import user from "./user.png";

const EditProfile = () => {
  return (
    <div className='font-classy'>
      <div className='w-screen h-screen flex fixed justify-center mt-6'>
        <div className='w-[80%] h-[80%] bg-gradient-to-r flex  rounded-3xl from-[#07012d] to-[#3c003e]   '>
          <div className='bg-[#07012d] flex justify-center items-center w-[40%] h-full'>
            <div className='w-full flex justify-center '>
              <div>
                <div className='flex items-center ml-20 gap-3 mb-6'>
                  <img src={user} alt="User profile" className="w-28" />
                  <button className='bg-white rounded-2xl w-16 p-3 h-12 font-bold hover:scale-110 transition-transform duration-200'>
                    Save
                  </button>
                </div>
                
                <table className='w-full text-white'>
  <tbody>
    <tr className='h-12'>
      <td className='text-lg'>
        <label htmlFor="firstName" className='cursor-pointer'>First Name</label>
      </td>
      <td className='pl-5'>
        <input type="text" id="firstName" className='h-8 rounded-md text-black w-[250px]' />
      </td>
    </tr>
    <tr className='h-12'>
      <td className='text-lg'>
        <label htmlFor="lastName" className='cursor-pointer'>Last Name</label>
      </td>
      <td className='pl-5'>
        <input type="text" id="lastName" className='h-8 rounded-md text-black w-[250px]' />
      </td>
    </tr>
    <tr className='h-12'>
      <td className='text-lg'>
        <label htmlFor="gender" className='cursor-pointer'>Gender</label>
      </td>
      <td className='pl-5'>
        <div className='flex gap-3' id="gender">
          <label className='cursor-pointer'><input type="radio" name="gender" value="male" /> Male</label>
          <label className='cursor-pointer'><input type="radio" name="gender" value="female" /> Female</label>
          <label className='cursor-pointer'><input type="radio" name="gender" value="other" /> Other</label>
        </div>
      </td>
    </tr>
    <tr className='h-12'>
      <td className='text-lg'>
        <label htmlFor="age" className='cursor-pointer'>Age</label>
      </td>
      <td className='pl-5'>
        <input type="number" id="age" className='h-8 rounded-md text-black w-[250px]' />
      </td>
    </tr>
    <tr className='h-12'>
      <td className='text-lg'>
        <label htmlFor="phoneNo" className='cursor-pointer'>Phone No</label>
      </td>
      <td className='pl-5'>
        <input type="number" id="phoneNo" className='h-8 rounded-md text-black w-[250px]' />
      </td>
    </tr>
    <tr className='h-12'>
      <td className='text-lg'>
        <label htmlFor="gmail" className='cursor-pointer'>Gmail</label>
      </td>
      <td className='pl-5'>
        <input type="email" id="gmail" className='h-8 rounded-md text-black w-[250px]' />
      </td>
    </tr>
    <tr className='h-12'>
      <td className='text-lg'>
        <label htmlFor="address" className='cursor-pointer'>Address</label>
      </td>
      <td className='pl-5'>
        <input type="text" id="address" className='h-8 rounded-md text-black w-[250px]' />
      </td>
    </tr>
  </tbody>
</table>

                
              </div>
            </div>
          </div>
            <div className='w-[70%] pl-12 pt-12  text-white flex gap-12  flex-col'>
              <div className='w-full flex  flex-col'>
                <label htmlFor="" className='text-xl mb-3'> Set Your Bio</label>
                <div className='w-[80%] h-32 bg-white'>
  <label htmlFor="bio">Click to edit bio:</label>
  <input type="text" id="bio" />
</div>

              </div>
              <div>
                <h1 className='text-xl mb-3'>Add Your Skills</h1>
                <div className='w-[80%] h-64 pt-3 flex justify-center bg-white px-3'>
                  <input type="text" className='px-3 w-[80%] h-12 shadow-2xl border-2 border-black rounded-l-2xl text-black' />
                  <button className="rounded-r-lg relative w-36 h-12 cursor-pointer flex items-center border border-[#07012d] bg-[#07012d] group hover:bg-gradient-to-r from-[#07012d] to-[#3c003e] active:bg-bg-gradient-to-r active:border-[#3c003e]">
      <span className="text-gray-200  ml-3 transform group-hover:translate-x-10 transition-all duration-300">
        Add Skill
      </span>
      <span className="absolute right-0 h-full w-10 rounded-lg bg-[#3c003e] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
        <svg
          className="svg w-8 text-white"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" x2="12" y1="5" y2="19" />
          <line x1="5" x2="19" y1="12" y2="12" />
        </svg>
      </span>
    </button>
                </div>
              </div>
              

              
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default EditProfile
