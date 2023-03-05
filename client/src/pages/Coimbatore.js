import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/p3.png";
import person4 from "../images/p4.png";
import person5 from "../images/p5.png";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data from "../data/guides.json";
import React, { useState, useEffect } from "react";

export default function Coimbatore() {
  const [filteredGuides, setFilteredGuides] = useState([]);

  useEffect(() => {
    const guides = data.guides;
    const filtered = guides.filter((guide) => guide.city === "Coimbatore");
    setFilteredGuides(filtered);
  }, []);
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="h-10"></div>
      <div>
        <h1 className="font-extrabold text-3xl text-purple-600 pt-8 px-10">
          List of guides available in Coimbatore
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-8 items-center justify-center">
        {filteredGuides.map((guide) => {
          return Card(
            guide.name,
            guide.image,
            guide.lang,
            guide.age,
            guide.exp,
            guide.star
          );
        })}
      </div>
    </section>
  );
}
