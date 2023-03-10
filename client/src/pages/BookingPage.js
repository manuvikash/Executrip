import Navbar from "../components/Navbar";
import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function BookingPage() {
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const calculateDaysBetween = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const location = useLocation();
  const guideId = location.state.guideId;
  const [guide, setGuide] = React.useState([]);
  console.log(`http://localhost:5000/api/guide/${guideId}`);
  axios
    .get(`http://localhost:5000/api/guide/${guideId}`)
    .then((response) => {
      const data = response.data;
      setGuide(data);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(guide);
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="h-20"></div>
      <div className="items-center flex flex-col ">
        <h1 className="text-3xl font-bold text-purple-600 mb-5">
          {guide.name}
        </h1>
        <img
          src={guide.image}
          className="h-48 w-48 border-purple-900 border-8 rounded-2xl"
        />
        <p className="mt-5 font-bold text-lg">
          Languages: {guide.lang} <br /> Age: {guide.age} <br />
          Work experience: {guide.exp} <br /> Star rating: {guide.star}
        </p>
      </div>
      <div className="items-left flex flex-col ">
        <div className="mt-20 mx-24 font-bold text-xl flex justify-between flex-row items-center h-auto ">
          <p className="text-2xl">Date</p>
          <p className="items-center flex">
            From:
            <p className="h-auto w-auto px-10 py-3 mx-5 bg-purple-300 rounded-full">
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="bg-purple-300"
              />
            </p>
          </p>
          <p className="items-center flex">
            To:
            <p className="h-auto w-auto px-10 py-3 mx-5 bg-purple-300 rounded-full">
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                className="bg-purple-300"
              />
            </p>
          </p>
          <div className="flex"></div>
        </div>
        <div className="mt-10 mx-24 font-bold text-xl flex justify-between flex-row items-center h-auto ">
          <p className="text-2xl">Rate</p>
          <p className="items-center flex">
            <p className="h-auto w-auto px-20 py-3 mx-5 bg-purple-300 rounded-full">
              {/*rate is guide.rate multiplied by number of days*/}
              {calculateDaysBetween() !== "NaN" && calculateDaysBetween() > 0
                ? guide.rate * calculateDaysBetween()
                : 0}
            </p>
          </p>
          <div className="flex w-32"></div>
          <div className="flex w-32"></div>
        </div>
      </div>
      <div className="items-left flex flex-col ">
        <div className="mt-10 mx-24 font-bold text-xl flex justify-start flex-row items-center h-auto ">
          <p className="text-2xl">Place of Stay</p>
          <p className="items-center flex"></p>
          <p className="h-auto w-3/5 ml-56 px-10 py-3 mx-32 bg-purple-300 rounded-full">
            <input type="text" placeholder="" className="bg-purple-300" />
          </p>
        </div>
        <div className="items-left flex flex-col ">
          <div className="mt-10 mx-24 font-bold text-xl flex justify-start flex-row items-center h-auto ">
            <p className="text-2xl">Specific attractions(if any)</p>
            <p className="items-center flex"></p>
            <p className="h-auto w-3/5 px-10 py-3 mx-20 bg-purple-300 rounded-full">
              <input type="text" placeholder="" className="bg-purple-300" />
            </p>
          </div>
        </div>

        <a href = "/bookconf" className="items-center flex flex-col ">
          <h1 className="mt-10 text-2xl font-bold text-white mb-3 bg-blue-900 rounded-3xl px-10 py-3">
            Confirm Booking
          </h1>
        </a>
      </div>
    </section>
  );
}
