import Navbar from "../components/Navbar";
import Card from "../components/Card";
import React, { useState,useEffect } from "react";
import axios from "axios";

export default function Chennai() {
  const [data, setData] = useState([]);
  // axios
  //   .get("http://localhost:5000/api/guides/Chennai")
  //   .then((response) => {
  //     const data = response.data;
  //     setData(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  axios.defaults.withCredentials = true;
  useEffect(() => {
    
    axios
    .get("https://temp-production-7bab.up.railway.app/api/guides/Chennai")
    .then((response) => {
      const data = response.data;
      setData(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  

  const filteredGuides = data;

  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="h-10"></div>
      <div>
        <h1 className="font-extrabold text-3xl text-purple-600 pt-8 px-10">
          List of guides available in Chennai
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-8 items-center justify-center">
        {filteredGuides.map((guide) => {
          return Card(
            guide.id,
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
