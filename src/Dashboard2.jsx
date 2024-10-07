import React from "react";

import js from "./js.jpeg";
import c from "./c.jpg";
import java from "./java.jpg";
import hs from "./top2.png";
import score from "./score.png";
import cS from "./cS.png";
import cpp from "./cppp.png";
import node from "./node.png";
import python from "./python.png";
import "./likebtn.css";
import { NavLink } from "react-router-dom";
import Card from "./Card";

const Dashboard2 = () => {
  return (
    <div className="font-classy ">
      <div className=" w-full  h-[100%] px-16  pt-3  bg-slate-100">
        <div className="flex h-[100%] w-full  ">
          <div className=" flex pt-3   w-full gap-10  ">
            <div className="w-3/5 h-[580px]  mb-12 overflow-auto  ">
              <div className="w-full  ">
                <input
                  type="text"
                  className=" h-10  w-full  px-4  "
                  placeholder="Enter the Subject on which you want quizz.. "
                />
              </div>
              <Card img={c} sub="C" />
              <Card img={cpp} sub="C++" />
              <Card img={cS} sub="C#" />
              <Card img={java} sub="JAVA" />
              <Card img={js} sub="JS" />
              <Card img={node} sub="Node JS" />
              <Card img={python} sub="Python" />
            </div>
            <div className="bg-white   h-96 rounded-2xl w-[500px]">
              <div className="flex bg-[#3c003e] justify-center">
                <h1 className=" p-3  rounded-t-2xl text-white text-2xl ">
                  LeaderBoard - Top 10
                </h1>
                <img src={hs} className="w-8 h-8 mt-3 " alt="" />
              </div>
              <div className="flex gap-7  text-lg shadow-xl ">
                <table className="w-full ">
                  <tr className="border-b-2 border-black">
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Subject</th>
                  </tr>
                  <tr>
                    <td className="pl-10">1</td>
                    <td className="pl-10">Rohan Singh</td>
                    <td className="pl-10">9.5 </td>
                    <td className="pl-10">JS</td>
                  </tr>
                  <tr>
                    <td className="pl-10">2</td>
                    <td className="pl-10">Jaya</td>
                    <td className="pl-10">9.2 </td>
                    <td className="pl-10">C++</td>
                  </tr>
                  <tr>
                    <td className="pl-10">3</td>
                    <td className="pl-10">Riya Sharma</td>
                    <td className="pl-10">8.5 </td>
                    <td className="pl-10">JS</td>
                  </tr>
                  <tr>
                    <td className="pl-10">4</td>
                    <td className="pl-10">Siya</td>
                    <td className="pl-10">8.4 </td>
                    <td className="pl-10">JS</td>
                  </tr>
                  <tr>
                    <td className="pl-10">5</td>
                    <td className="pl-10">Divya Singh</td>
                    <td className="pl-10">8.3 </td>
                    <td className="pl-10">Node</td>
                  </tr>
                  <tr>
                    <td className="pl-10">6</td>
                    <td className="pl-10">Pooja Kumari</td>
                    <td className="pl-10">8.2</td>
                    <td className="pl-10">Python</td>
                  </tr>
                  <tr>
                    <td className="pl-10">7</td>
                    <td className="pl-10">Rohan</td>
                    <td className="pl-10">8.1 </td>
                    <td className="pl-10">C#</td>
                  </tr>
                  <tr>
                    <td className="pl-10">8</td>
                    <td className="pl-10">Raj Gupta</td>
                    <td className="pl-10">8 </td>
                    <td className="pl-10">Python</td>
                  </tr>
                  <tr>
                    <td className="pl-10">9</td>
                    <td className="pl-10">Piyush Sharma</td>
                    <td className="pl-10">7.9 </td>
                    <td className="pl-10">Node Js</td>
                  </tr>
                  <tr>
                    <td className="pl-10">10</td>
                    <td className="pl-10">Rohan Thakur</td>
                    <td className="pl-10">7.3 </td>
                    <td className="pl-10">C++</td>
                  </tr>
                </table>
              </div>
              <NavLink to="Question">
                <div className="w-[500px]  bg-[#3c003e] justify-center items-center flex text-white mt-4 rounded-r-2xl  h-36 text-2xl cursor-pointer">
                  <h1>Tap Here To View Your Score</h1>
                  <img src={score} className="ml-3" alt="" />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#3c003e] flex text-white justify-center items-center h-20">
        Thanks for visiting our website.. Keep learning 🤍
      </footer>
    </div>
  );
};

export default Dashboard2;
