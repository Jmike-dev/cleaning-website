import React from "react";
import Items from "./Items";
import { OFFICELOCATION, OPERATINGHOURS, INFORMATIONAL } from "./FooterMenu";

export default function ItemContainer() {
  return (
    <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 sm:px-8 lg:grid-cols-3 ">
      <Items Links={OFFICELOCATION} title="OFFICE LOCATION" />
      <Items Links={OPERATINGHOURS} title="OPERATING HOURS" />
      <Items Links={INFORMATIONAL} title="INFO" />
    </div>
  );
}
