import React from "react";
import { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";
import Home from "../../../pages/Home/Home";
import Services from "../../../pages/Services/Services";
import About from "../../../pages/About/About";

export default function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "About", link: "/about" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      {/* parent div */}
      <div className=" left-0 top-0 w-full  ">
        {/* child div */}
        <div className="items-center justify-between bg-primary-purple px-7  shadow-lg md:flex md:px-10 md:py-4">
          {/* logo div */}
          <div className="item-center font-san flex cursor-pointer text-2xl font-bold text-primary-black">
            <span className="mr-1 pt-2 text-3xl text-primary-blue">
              <ion-icon name="logo-soundcloud"></ion-icon>
            </span>
            cleaning
          </div>
          {/* mobile div menu button */}
          <div
            onClick={() => setOpen(!open)}
            className="relative bottom-4 left-2 pl-72 text-3xl  sm:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`absolute left-0 w-full bg-primary-purple pb-12 pl-9 transition-all duration-500 ease-in-out md:static md:z-auto
                    md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
                      open ? "top-20" : "-top-96"
                    }`}
          >
            {links.map((link) => (
              <li key={link.name} className="my-7 text-2xl md:my-0 md:ml-8">
                <Link to={link.link}>
                  <a
                    href={link.link}
                    className="font-san rounded-lg bg-primary-blue px-2 py-2 
                            text-primary-black duration-700 ease-in-out  hover:-translate-y-3 hover:bg-primary-green hover:text-primary-black "
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}

            {/* <Button></Button> */}
          </ul>
        </div>
      </div>
      {/* define the routes */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}
