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
      </div>
    </header>
  );
};

export default CitySelect;
