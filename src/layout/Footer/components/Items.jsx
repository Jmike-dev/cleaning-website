import React from "react";

export default function Items({ Links, title }) {
  return (
    <div>
      <ul>
        <h1 className="mb-1 text-4xl font-semibold text-primary-green">
          {title}
        </h1>
        {Links.map((link) => (
          <li key={link.name}>
            <a
              href={link.link}
              className="cursor-pointer text-xl text-primary-blue hover:text-primary-purple
                     md:text-2xl"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
