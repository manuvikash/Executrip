import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/p3.png";
import person4 from "../images/p4.png";
import person5 from "../images/p5.png";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Guidelist = [
  {
    name: "John Doe",
    image: person1,
    lang: "English, German, Dutch",
    age: "30",
    exp: "5",
    star: 5,
  },
  {
    name: "Raj",
    image: person2,
    lang: "English, Hindi",
    age: "28",
    exp: "3",
    star: 3.5,
  },
  {
    name: "Meera",
    image: person3,
    lang: "Malayalam, Tamil",
    age: "30",
    exp: "4",
    star: 4,
  },
  {
    name: "Vikram",
    image: person4,
    lang: "English, Tamil, Kannada ",
    age: "40",
    exp: "10",
    star: 2.5,
  },
  {
    name: "Vairamuthu",
    image: person5,
    lang: "Tamil",
    age: "26",
    exp: "2",
    star: 4,
  },
];

export default function Coimbatore() {
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
