import Navbar from "../components/Navbar";
import 'tw-elements';

const WhyUs = () => {
    return (
        <header className="w-screen h-9/10 relative bg-slate overflow-y-auto">
            <Navbar />
            <div className="flex flex-col md:flex-row lg:flex-row ">
                <div className="md:w-1/2 h-full">
                    <div id="carouselExampleCaptions" class="carousel slide relative h-screen" data-bs-ride="carousel">
                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner relative w-full h-auto overflow-y-auto">
                            <div class="carousel-item active relative float-left w-full">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                                    class="w-full h-screen object-cover"
                                    alt="..."
                                />
                                <div class="carousel-caption hidden md:block absolute text-center">
                                    <h5 class="text-xl">First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                                    class="w-full h-screen object-cover"
                                    alt="..."
                                />
                                <div class="carousel-caption hidden md:block absolute text-center">
                                    <h5 class="text-xl">Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                                    class="w-full h-screen object-cover"
                                    alt="..."
                                />
                                <div class="carousel-caption hidden md:block absolute text-center h">
                                    <h5 class="text-xl">Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>

                <div className="md:w-1/2 h-full flex flex-col pt-10 pl-10">
                    <h1 className="text-white text-4xl font-extrabold mb-2">
                        Why choose{" "}
                        <span className="text-purple-400">Executrips?</span>
                    </h1>
                    <h2 className="text-white text-2xl mb-4">
                        India's Favourite Travel Buddy
                    </h2>
                    <h3 className="text-white text-2xl mb-4">
                        <ul className=" list-disc">
                            <li>No last minute hassles</li>
                            <li>No language barriers as you can choose a guide that speaks a language you understand from our various options!</li>
                            <li>Traveling made so much easier</li></ul>
                    </h3>
                    <h1 className="text-purple-400 text-4xl font-extrabold mb-2 pt-5">
                        About Us
                    </h1>
                    <h3 className="text-white text-2xl mb-4">
                        Executrips is a vision that came into picture only because of our perseverance to create something
                        that will make tourists lives easier while they travel to a new place. The 5 of us being avid travellers,
                        also ended up being victims of the subpar services offered by travel companies at high prices ourselves,
                        we decided to make sure that the tourists should have a seamless experience while they’re in a new city.
                        The various guide options provided will suit a large variety of the tourist population.
                    </h3>
                    <h1 className="text-purple-400 text-4xl font-extrabold mb-2 pt-5">
                        Developed By
                    </h1>
                    <h3 className="text-white text-2xl mb-4">
                        <ol className=" list-decimal">
                            <li>Manuvikash Saravanakumar</li>
                            <li>Yadav Ranganathan</li>
                            <li>Ritika Loganayagi</li>
                            <li>Shruthi Uday Menon</li>
                            <li>Kavin Manikandan</li></ol>
                    </h3>



                    <div className="flex justify-center py-4">
                    </div>
                </div>
            </div>
        </header >
    );
};

export default WhyUs;
