import React from "react";
import ItemContainer from "./components/ItemContainer";
import { Icons } from "./components/FooterMenu";
import SocialIcons from "./components/SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full rounded-2xl bg-primary-black px-4 py-7 sm:px-12 md:flex md:items-center md:justify-between">
      <ItemContainer />
      <SocialIcons Icons={Icons} />
    </footer>
  );
}
