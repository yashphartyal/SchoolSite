import React from "react";
import heroVideo from "../assets/kid-with-telescope.mp4";

function Hero() {
  return (
    <div className="relative h-[100vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-15" />
      <section className="absolute bottom-8 right-0 p-4 bg-black bg-opacity-95 rounded-l-lg shadow-lg">
        <p className="text-white text-sm md:text-3xl font-extrabold font-serif">
          Welcome to Springdale Public School,
        </p>
        <p className="text-white text-sm md:text-xl font-light font-sans mt-2">
          where we nurture young minds for a brighter future....
        </p>
      </section>
    </div>
  );
}

export default Hero;

