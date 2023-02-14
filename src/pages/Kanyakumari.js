import person1 from "../images/p16.png";
import person2 from "../images/p17.png";
import person3 from "../images/p18.png";
import person4 from "../images/p19.png";
import person5 from "../images/p20.png";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Guidelist = [
  {
    city: "Kanyakumari",
    name: "Yadav Reddy",
    image: person1,
    lang: "English, Telugu, Tamil",
    age: "22",
    exp: "2",
    star: 3.5,
  },
  {
    city: "Kanyakumari",
    name: "Sudeep",
    image: person2,
    lang: "English, Tamil",
    age: "40",
    exp: "10",
    star: 4,
  },
  {
    city: "Kanyakumari",
    name: "Angela",
    image: person3,
    lang: "English, French, German",
    age: "32",
    exp: "5",
    star: 2.5,
  },
  {
    city: "Kanyakumari",
    name: "Latha",
    image: person4,
    lang: "English, Tamil, Hindi, Malayalam",
    age: "42",
    exp: "13",
    star: 4,
  },
  {
    city: "Kanyakumari",
    name: "Shreya",
    image: person5,
    lang: "English, Tamil, Marathi",
    age: "33",
    exp: "8",
    star: 2.5,
  },
];

export default function Kanyakumari() {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="h-10"></div>
      <div>
        <h1 className="font-extrabold text-3xl text-purple-600 pt-8 px-10">
          List of guides available in Kanyakumari
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
