import React from 'react'
import logo from "./logo.png";
import search from "./search.png";
import user from "./user.png";
import { NavLink, Outlet } from "react-router-dom";
const Nav = () => {
  return (
    <>
    <nav className=" justify-between  flex items-center shadow-lg ">
    <img className="w-28 ml-8" src={logo} alt="" />
    <div className="flex gap-20 mr-20 items-center">
      <NavLink to="Dashboard" className="text-lg hover:underline hover:scale-110 transition-transform duration-300 decoration-[#722974] font-bold">
        Home
      </NavLink>
      <NavLink to="Like" className="text-lg hover:scale-110 transition-transform duration-300 font-bold hover:underline decoration-[#722974] ">
        Like
      </NavLink>
      <NavLink to="Reminder" className="text-lg hover:scale-110 transition-transform duration-300 font-bold hover:underline decoration-[#722974] ">
        Reminder's
      </NavLink>
      <NavLink to="Quiz" className="text-lg hover:scale-110 transition-transform duration-300 font-bold hover:underline decoration-[#722974] ">
        Problem
      </NavLink>
      <NavLink to="AllUser" className="text-lg hover:scale-110 transition-transform duration-300 font-bold hover:underline decoration-[#722974] ">
        All Users
      </NavLink>
      
      <div className="flex">
        <input
          type="text"
          placeholder="Find any User"
          className="rounded-full border-2 border-black px-4 py-1 overflow-hidden"
        />
        <img
          src={search}
          className="w-8  absolute right-[160px] mt-2"
          alt=""
        />
        <NavLink to="profile">
        <img src={user} className="w-12 hover:scale-110 transition-transform duration-300 ml-6 cursor-pointer" alt="" />
     </NavLink>
      </div>
    </div>
  </nav>
  <Outlet/>
  </>
  )
}

export default Nav
