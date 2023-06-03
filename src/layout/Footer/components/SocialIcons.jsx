import React from "react";

export default function SocialIcons({ Icons }) {
  return (
    <div className="text-primary-purple ">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="item-center mx-1.5 inline-flex cursor-pointer rounded-full bg-primary-black p-2 text-4xl hover:bg-primary-blue hover:text-primary-green"
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
}
