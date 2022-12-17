import Image from "next/image";
import Link from "next/link";
import homecinema from "/public/images/home_cinema.webp";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image
          src={homecinema}
          alt="homecinema"
          className="w-[12.5rem] h-[12.5rem]"
        />
      </div>
      <h1 className="text-2xl text-gray uppercase font-bold">
        Welcome to WatchMe
      </h1>
      <p className="text-gray-500">Produce FILM feature, TELEVISION and GAME</p>
      <Link href="/contact">
      <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm">
        CONTACT US NOW
      </button>
      </Link>
   
    </div>
  );
};

export default Hero;
