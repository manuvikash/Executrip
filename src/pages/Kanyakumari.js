import person1 from "../images/p16.png";
import person2 from "../images/p17.png";
import person3 from "../images/p18.png";
import person4 from "../images/p19.png";
import person5 from "../images/p20.png";
import Navbar from "../components/Navbar";

const Guidelist = [
  {
    name: "Yadav Reddy",
    image: person1,
    lang: "English, Telugu, Tamil",
    age: "22",
    exp: "2",
  },
  {
    name: "Sudeep",
    image: person2,
    lang: "English, Tamil",
    age: "40",
    exp: "10",
  },
  {
    name: "Angela",
    image: person3,
    lang: "English, French, German",
    age: "32",
    exp: "5",
  },
  {
    name: "Latha",
    image: person4,
    lang: "English, Tamil, Hindi, Malayalam",
    age: "42",
    exp: "13",
  },
  {
    name: "Shreya",
    image: person5,
    lang: "English, Tamil, Marathi",
    age: "33",
    exp: "8",
  },
];

const Card = (name, image, lang, age, exp) => {
  return (
    <div class="w-full max-w-sm bg-white rounded-lg border border-grey-200 shadow-md dark:bg-grey-800 dark:border-grey-700 mt-10">
      <div class="flex flex-col items-center py-10">
        <img
          class="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={image}
          alt="guide image"
        />
        <h5 class="mb-1 text-xl font-medium text-grey-900 dark:text-white">
          {name}
        </h5>
        <span class="text-sm text-grey-500 dark:text-grey-400 text-center">
          <span class="font-bold">Languages: </span>
          {lang}
          <br />
          <span class="font-bold">Age: </span>
          {age}
          <br />
          <span class="font-bold">Work experience: </span>
          {exp} years
        </span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a
            href="#"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Contact
          </a>
          <a
            href="#"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-grey-900 bg-white rounded-lg border border-grey-300 hover:bg-grey-100 focus:ring-4 focus:outline-none focus:ring-grey-200 dark:bg-grey-800 dark:text-white dark:border-grey-600 dark:hover:bg-grey-700 dark:hover:border-grey-700 dark:focus:ring-grey-700"
          >
            Add to shortlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Kanyakumari() {
  return (
    <section className="w-full h-full">
      <Navbar />
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
            guide.exp
          );
        })}
      </div>
    </section>
  );
}
