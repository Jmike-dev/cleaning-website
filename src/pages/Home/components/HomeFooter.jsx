import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import IMAGES from "../../../assets/images/images";
import { useNavigate } from "react-router-dom";
export default function HomeFooter() {
  const slides = [
    { url: IMAGES.slide1, title: "What do we do?" },
    { url: IMAGES.slide2, title: "We clean your house as well as you do" },
  ];
  const [currentslide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  //  previous slide function
  const prevslide = () => {
    const isFirstSlide = currentslide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentslide - 1;
    setCurrentSlide(newSlide);
  };
  // nwxt slide Function
  const nextslide = () => {
    const isLastSlide = currentslide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentslide + 1;
    setCurrentSlide(newSlide);
  };
  return (
    <>
      {/* about parent div container */}
      <div className="group my-4 flex w-full justify-end rounded-md px-4 md:rounded-3xl ">
        {/* slides container */}
        <div className="m-auto h-96 w-3/4 px-4 py-16 md:ml-10 md:h-[780px] md:max-w-[1080px] ">
          {/* slide div */}
          <div
            style={{ backgroundImage: `url(${slides[currentslide].url})` }}
            className="h-full w-40 rounded-2xl bg-cover bg-center duration-700 md:w-full "
          ></div>
          {/* left arrow */}
          <div
            className="absolute -left-1 top-[33rem] hidden -translate-x-0 translate-y-[50%] cursor-pointer 
          rounded-full   bg-primary-grey p-2 text-2xl text-primary-blue md:left-5 md:top-[64rem] md:hidden md:group-hover:block "
          >
            <BsChevronCompactLeft onClick={prevslide} size={30} />
          </div>
          {/* right arrow */}
          <div
            className="absolute -right-2 top-[33rem] hidden -translate-x-0 translate-y-[50%] cursor-pointer 
          rounded-full bg-primary-grey p-2 text-2xl text-primary-blue  md:right-2 md:top-[64rem] md:hidden md:group-hover:block"
          >
            <BsChevronCompactRight onClick={nextslide} size={30} />
          </div>
        </div>
        {/* right text div */}
        <div className=" mr-5  flex flex-col pt-24 md:mr-7 md:pt-80">
          {slides.map((text) => (
            <h1
              key={text.title}
              className="font-san text-center text-xl  text-primary-purple md:text-5xl "
            >
              {text.title}
            </h1>
          ))}
          <div className="md:ml-44 md:mt-10  ">
            <button
              onClick={handleClick}
              className="my-3 inline-block rounded-lg bg-primary-green px-4 py-2 font-sans text-xl text-primary-blue
               transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-primary-purple hover:font-serif hover:text-primary-blue md:text-3xl"
            >
              {" "}
              Our Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
