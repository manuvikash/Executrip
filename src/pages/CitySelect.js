import Navbar from "../components/Navbar";
import React from "react";
import bgVideo from "../assets/bgvideo.mp4";
import DropdownComponent2 from "../components/Dropdown2";

const CitySelect = () => {
  return (
    <header className="w-screen h-screen relative bg-slate overflow-hidden">
      <Navbar />
      <video
        src={bgVideo}
        className="w-full h-full object-cover overflow-hidden"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
        <h1 className="text-white text-4xl font-extrabold mb-2">
          Explore Tamil Nadu with{" "}
          <span className="text-purple-400">Executrip!</span>
        </h1>
        <h2 className="text-white text-2xl mb-4">
          India's Favourite Travel Buddy
        </h2>
        <div className="flex justify-center py-4">
          <DropdownComponent2 />
        </div>
        {/* <form
          action=""
          className="flex border p-1 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[80%] mx-auto"
        >
          <input
            type="text"
            placeholder="Search Destinations"
            className="grow bg-transparent outline-none"
          />
          <button className="w-11 btn--form">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form> */}
      </div>
    </header>
  );
};

export default CitySelect;
