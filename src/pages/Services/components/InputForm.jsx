import React from "react";

export default function InputForm(props) {
  return props.trigger ? (
    <div
      className="flex h-96 w-80 flex-col items-center justify-between rounded-lg bg-primary-purple
     text-primary-black shadow-lg shadow-primary-blue"
    >
      <form className="h-52 w-full space-y-4 p-4">
        <input type="text" placeholder="full name" className="inputClass" />
        <input type="email" placeholder="email" className="inputClass" />
        <input type="phone" placeholder="number" className="inputClass" />
        <input type="text" placeholder="location" className="inputClass" />
        <input type="date" placeholder="location" className="inputClass" />
      </form>
      <button
        className="inline-block rounded-lg bg-primary-blue px-4 py-2 font-sans text-xl text-primary-black
       transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-primary-green hover:font-serif
        hover:text-primary-blue md:text-3xl"
      >
        Submit
      </button>
      {props.children}
    </div>
  ) : (
    ""
  );
}
