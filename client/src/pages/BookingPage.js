import Navbar from "../components/Navbar";
import React from "react";
import img from "../images/p6.png";

export default function BookingPage({ guide }) {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="h-20"></div>
      <div className="items-center flex flex-col ">
        <h1 className="text-3xl font-bold text-purple-600 mb-5">Rachel Zane</h1>
        <img
          src={img}
          className="h-40 w-40 border-purple-900 border-8 rounded-2xl"
        />
        <p className="mt-5 font-bold text-lg">
          Languages : English
          <br /> Age: 30 <br />
          Work experience: 5 years
        </p>
      </div>
    </section>
  );
}
