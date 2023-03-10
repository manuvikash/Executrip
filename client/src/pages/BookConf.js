import Navbar from "../components/Navbar";
import bgi from "../assets/bg.png";
// import ld from "../assets/ld.png";



export default function BookConf() {


  return (
    
    <div className=" w-screen h-screen relative bg-slate overflow-hidden">
      <Navbar />
      <img
        src={bgi}
        className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
      />
      <div className="absolute top-1/3 left-1/2 space-y-3 flex flex-col mr-10">
        <h1 className="  text-4xl font-bold text-black flex">
          Great!, The booking is ready.
        </h1>
        <h2 className="   text-2xl text-black flex">
          You will receive a confirmation email soon with your booking details.
        </h2>
        <a href = "/city-select" className="flex items-center justify-center bg-grey-800 hover:bg-black text-white  text-xl rounded-full w-64 h-16 py-2">
          Go to homepage
        </a>
      </div>
    </div>
  );
}
