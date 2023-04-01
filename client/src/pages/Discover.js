import Navbar from "../components/Navbar";
import "tw-elements";
import CityCard from "../components/CityCard";

const Citylist = [
  {
    name: "Coimbatore",
    info: "Coimbatore is a city located in the southern part of India, known for its industrial and educational significance. The city offers a range of attractions, including ancient temples like the Marudamalai Temple, and modern ones such as the Gedee Car Museum. Coimbatore is also a great place for nature lovers, with scenic spots like the Siruvani Waterfalls and the Annamalai Wildlife Sanctuary.",
    image:
      "https://raw.githubusercontent.com/manuvikash/Executrip/cde66540c9611cfc679fbcd8bb7a264c3b690747/src/images/coimbatore.jpg",
  },
  {
    name: "Chennai",
    info: "Chennai is a bustling metropolitan city located on the east coast of India, known for its rich history, culture and beaches. The city boasts of iconic landmarks such as the Kapaleeshwarar Temple, Fort St. George, and the Marina Beach. Visitors can explore museums, art galleries and cultural centers showcasing the city's heritage. Chennai is also famous for its delicious food, particularly the South Indian cuisine. Shopping enthusiasts can indulge in retail therapy at vibrant markets and malls.",
    image:
      "https://raw.githubusercontent.com/manuvikash/Executrip/cde66540c9611cfc679fbcd8bb7a264c3b690747/src/images/chennai.jpg",
  },
  {
    name: "Madurai",
    info: "Madurai is a historic city located in the southern part of India, known for its ancient temples, cultural heritage and vibrant markets. The city's main attraction is the Meenakshi Amman Temple, a massive complex featuring stunning architecture and intricate carvings. Other attractions include the Thirumalai Nayak Palace, Gandhi Museum and the bustling streets of the old city.",
    image:
      "https://raw.githubusercontent.com/manuvikash/Executrip/cde66540c9611cfc679fbcd8bb7a264c3b690747/src/images/madurai.jpg",
  },
  {
    name: "Kanyakumari",
    info: "Kanyakumari is a coastal town situated at the southernmost tip of India, where the Arabian Sea, Indian Ocean and Bay of Bengal meet. The town is renowned for its breathtaking views of the sunrise and sunset over the ocean. Kanyakumari is home to the iconic Vivekananda Rock Memorial and the ancient Bhagavathy Amman Temple. Visitors can also explore the Thiruvalluvar Statue, Gandhi Memorial and enjoy the pristine beaches. The town is a perfect blend of spirituality, history and natural beauty.",
    image:
      "https://raw.githubusercontent.com/manuvikash/Executrip/cde66540c9611cfc679fbcd8bb7a264c3b690747/src/images/kanyakumari.jpg",
  },
];

export default function Discover() {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="h-10"></div>
      <div>
        <h1 className="text-center font-extrabold text-6xl text-purple-600 pt-8 py-20 ">
          TamilNadu Highlights
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-8 items-center justify-center">
        {Citylist.map((Citylist) => {
          return CityCard(Citylist.name, Citylist.info, Citylist.image);
        })}
      </div>
    </section>
  );
}
