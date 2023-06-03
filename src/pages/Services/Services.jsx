import React from "react";
import IMAGES from "../../assets/images/images";
import InputForm from "./components/InputForm";
import { useState } from "react";

export default function Services() {
  const [formPopUp, setFormPopUp] = useState(false);
  return (
    <>
      {/* parent service div */}
      <div className="mb-4 mt-24 flex w-full flex-col items-center justify-center rounded-xl bg-primary-black md:mt-24">
        {/* child service div */}
        <div className="flex py-10">
          {/* h1 div */}
          <div className=" content-center justify-items-center ">
            <h1 className="my-2 text-center font-serif text-5xl font-bold text-primary-purple ">
              our Services
            </h1>
            {/* services div card */}
            <div className="mt-10 flex w-full  flex-col content-center justify-center rounded-lg bg-primary-green lg:flex-row ">
              {/* card image */}
              <img
                className="mx-4 my-4 h-32 w-auto rounded-lg transition duration-700 ease-in-out hover:-translate-y-2 md:h-64"
                src={IMAGES.img2}
                alt=""
              />
              {/* card details */}
              <div className="static mx-5 md:mx-6 md:my-20">
                {/* card description */}
                <div className="">
                  <h1 className="font-serif text-2xl text-primary-black">
                    Price
                  </h1>
                  <h1 className="font-serif text-2xl text-primary-black">
                    House cleaning
                  </h1>
                </div>
                {/* button div */}
                <div className="md:my-2 ">
                  <button
                    className="my-3 inline-block rounded-lg bg-primary-blue px-4 py-2 font-sans text-xl text-primary-black
               transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-primary-purple hover:font-serif hover:text-primary-blue md:text-3xl"
                    onClick={() => setFormPopUp(true)}
                  >
                    {" "}
                    book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-center justify-center bg-primary-dark-green">
        <InputForm trigger={formPopUp}></InputForm>
      </div>
    </>
  );
}
