import Navbar from "../components/Navbar";
import "tw-elements";
import image1 from "../assets/wu10.jpg";
import image2 from "../assets/wu8.jpg";
import image3 from "../assets/wu9.jpg";

const WhyUs = () => {
  return (
    <header className="w-full h-screen relative bg-black overflow-y-auto">
      <Navbar />
      <div className="flex flex-col md:flex-row lg:flex-row mt-16 ">
        <div className="md:w-1/2 h-screen hidden md:block lg:block">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide relative h-full"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner relative w-full overflow-hidden h-screen">
              <div class="carousel-item active relative float-left w-full">
                <img
                  src={image1}
                  class="block w-full h-screen object-cover"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img
                  src={image2}
                  class="block w-full h-screen object-cover"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img
                  src={image3}
                  class="block w-full h-screen object-cover"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 h-full flex flex-col pt-10 pl-10 mx-10">
          <h1 className="text-white text-4xl font-extrabold mb-2">
            Why choose <span className="text-purple-400">Executrip?</span>
          </h1>
          <h2 className="text-white text-xl mb-4">
            India's Favourite Travel Buddy
          </h2>
          <h3 className="text-white text-xl mb-4">
            <ul className=" list-disc">
              <li>No last minute hassles</li>
              <li>
                No language barriers as you can choose a guide that speaks a
                language you understand from our various options!
              </li>
              <li>Traveling made so much easier</li>
            </ul>
          </h3>
          <h1 className="text-purple-400 text-4xl font-extrabold mb-2 pt-5">
            About Us
          </h1>
          <h3 className="text-white text-xl mb-4">
            Executrips is a vision that came into picture only because of our
            perseverance to create something that will make tourists lives
            easier while they travel to a new place. The 5 of us being avid
            travellers, also ended up being victims of the subpar services
            offered by travel companies at high prices ourselves, we decided to
            make sure that the tourists should have a seamless experience while
            they’re in a new city. The various guide options provided will suit
            a large variety of the tourist population.
          </h3>
          <h1 className="text-purple-400 text-4xl font-extrabold mb-2 pt-5">
            Developed By
          </h1>
          <h3 className="text-white text-xl mb-4">
            <ol className=" list-decimal">
              <li>Manuvikash Saravanakumar</li>
              <li>Yadav Ranganathan</li>
              <li>Ritika Loganayagi</li>
              <li>Shruthi Uday Menon</li>
              <li>Kavin Manikandan</li>
            </ol>
          </h3>

          <div className="flex justify-center py-4"></div>
        </div>
      </div>
    </header>
  );
};

export default WhyUs;
