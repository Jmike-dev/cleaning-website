import React from "react";
import IMAGES from "../../assets/images/images";
import HomeFoooter from "./components/HomeFooter";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/services");
  }
  return (
    <>
      {/* home parent div  container */}
      <div className="w-full rounded-b-lg bg-primary-black py-2 shadow-sm shadow-primary-grey sm:w-auto md:relative">
        {/* home child div container */}
        <div className="static flex w-full justify-end md:px-2 md:py-4">
          {/* h1  div container */}
          <div className=" mx-1 my-5 w-1/2 px-2 md:absolute md:left-5 md:top-5 md:w-1/3">
            <h1 className="font-serif text-2xl text-primary-purple hover:text-primary-green md:text-5xl">
              Are you tired of cleaning then it's time to call us
            </h1>
          </div>
          {/* image div container */}
          <div className="my-4 w-2/3 px-2 sm:h-96  md:w-auto">
            <img
              className=" h-full w-full rounded-xl transition duration-700 ease-in-out hover:-translate-y-3 md:h-96 "
              src={IMAGES.img1}
              alt=""
            />
          </div>
        </div>
        {/* button div container */}
        <div className="mx-6 my-6 md:relative md:bottom-32 md:right-72 md:mx-96 md:px-4 md:py-4">
          <button
            onClick={handleClick}
            className=" block h-full w-full rounded-xl bg-primary-green text-center font-sans text-2xl text-primary-blue transition duration-500 ease-in-out hover:-translate-y-2 hover:bg-primary-purple hover:font-serif hover:text-primary-blue md:text-4xl"
          >
            Book Now
          </button>
        </div>
      </div>
      <HomeFoooter />
    </>
  );
}
