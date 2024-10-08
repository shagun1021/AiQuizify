import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  const { img, sub } = props;
  return (
    <div>
      <div className="  mt-3 bg-white flex   rounded-r-2xl h-40">
        <img src={img} className=" h-40 p-2" alt="" />
        <div className="flex gap-4 mx-4 flex-col">
          <h1 className=" mt-6  text-2xl">Top {sub} Interviw Questions </h1>
          <div>
            <NavLink to="Quiz">
            <button className="bg-[#3c003e] hover:scale-110 transition-transform duration-300 hover:bg-[#57015a] p-3 px-6 rounded-2xl text-white">
              {" "}
              Start Now{" "}
            </button>
            </NavLink>
            <button className="bg-[#3c003e] hover:scale-110 transition-transform duration-300 ml-4 hover:bg-[#57015a] p-3 px-6 rounded-2xl text-white">
              {" "}
              Remind Me Later
            </button>

            <button className="buttonLike ml-[580px] relative bottom-6  ">
              <svg
                className="empty"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path fill="none" d="M0 0H24V24H0z"></path>
                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path>
              </svg>
              <svg
                className="filled"
                height="32"
                width="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H24V24H0z" fill="none"></path>
                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
