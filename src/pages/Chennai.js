import person1 from "../images/p6.png";
import person2 from "../images/p7.png";
import person3 from "../images/p8.jpg";
import person4 from "../images/p9.jpg";
import person5 from "../images/p10.jpg";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Guidelist = [
  {
    name: "Rachel Zane",
    image: person1,
    lang: "English, Tamil, French",
    age: "30",
    exp: "5",
    star: 5,
  },
  {
    name: "George Russell",
    image: person2,
    lang: "English, Tamil, Malayalam",
    age: "26",
    exp: "2",
    star: 4.5,
  },
  {
    name: "Anjali",
    image: person3,
    lang: "English, Telugu, Hindi",
    age: "28",
    exp: "6",
    star: 3.5,
  },
  {
    name: "Suresh",
    image: person4,
    lang: "English, Tamil, Kannada ",
    age: "40",
    exp: "10",
    star: 2,
  },
  {
    name: "Lakshmi",
    image: person5,
    lang: "English, Tamil",
    age: "30",
    exp: "7",
    star: 4.5,
  },
];

export default function Chennai() {
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
        {Guidelist.map((guide) => {
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
