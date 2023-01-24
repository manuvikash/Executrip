import person1 from "../images/p11.jpg";
import person2 from "../images/p12.jpg";
import person3 from "../images/p13.png";
import person4 from "../images/p14.png";
import person5 from "../images/p15.png";
import Navbar from "../components/Navbar";
import Card from "../components/ShortlistedCard";
import star from "../assets/starcolor.png";

const Guidelist = [
  {
    name: "Mohanlal",
    image: person1,
    lang: "English, Hindi, Malayalam",
    age: "30",
    exp: "5",
  },
  {
    name: "Ruben",
    image: person2,
    lang: "Tamil, Hindi, Telugu",
    age: "29",
    exp: "5",
  },
  {
    name: "Jithesh Pillai",
    image: person3,
    lang: "English, Tamil",
    age: "45",
    exp: "10",
  },
  {
    name: "Manikandan",
    image: person4,
    lang: "English, Tamil",
    age: "50",
    exp: "16",
  },
  {
    name: "Munusaami",
    image: person5,
    lang: "Tamil",
    age: "55",
    exp: "20",
  },
];

export default function Starred() {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="h-10"></div>
      <div className="flex flex-row items-center">
        <h1 className="font-extrabold text-3xl text-purple-600 pt-8 pl-10">
          Shortlisted guides
        </h1>
        <img src={star} className="h-8 mt-8 ml-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-8 items-center justify-center">
        {Guidelist.map((guide) => {
          return Card(
            guide.name,
            guide.image,
            guide.lang,
            guide.age,
            guide.exp
          );
        })}
      </div>
    </section>
  );
}
