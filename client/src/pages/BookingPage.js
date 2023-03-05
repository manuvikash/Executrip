import Navbar from "../components/Navbar";
import React from "react";
import img from "../images/p3.png";
import { useLocation } from "react-router-dom";
import data from "../data/guides.json";

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
    </section>
  );
}

{
  /* Date<label for="date-input">From: </label>
          <input type="date" id="date-input" name="date" />{" "}
          <label for="date-input">To: </label>
          <input type="date" id="date-input" name="date" />
          <br />
          Rate
          <br />
          Place of Stay
          <br />
          Specific attractions (if any)
        </div> */
}
