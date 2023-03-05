import Navbar from "../components/Navbar";
import React from "react";
import img from "../images/p3.png";
import { useLocation } from "react-router-dom";
import data from "../data/guides.json";
export default function BookingPage() {
  const location = useLocation();
  const guideId = location.state.guideId;
  const [guide, setGuide] = React.useState({});
  React.useEffect(() => {
    const guides = data.guides;
    const filtered = guides.filter((guide) => guide.id === guideId);
    setGuide(filtered[0]);
  }, []);
  const imageUrl = "../" + guide.image;
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="h-20"></div>
      <div className="items-center flex flex-col ">
        <h1 className="text-3xl font-bold text-purple-600 mb-5">
          {guide.name}
        </h1>
        <img
          src={imageUrl}
          className="h-40 w-40 border-purple-900 border-8 rounded-2xl"
        />
        <p className="mt-5 font-bold text-lg">
          Languages : {guide.lang} <br /> Age: {guide.age} <br />
          Work experience: {guide.exp} <br /> Star rating: {guide.star}
        </p>
      </div>
    </section>
  );
}
