"use client";
import MyContainer from "@/my-components/MyContainer";
import React, { useState } from "react";
import { roboData } from "./const/roboData";

const RoboAppContainer = () => {
  const [selectFilter, setSelectFilter] = useState("all");

  const filteredRobo =
    selectFilter === "all"
      ? roboData
      : roboData.filter((robo) => robo.status === selectFilter);

  return (
    <MyContainer>
      <h1 className="text-3xl mb-3 px-4 ">All Robots List</h1>
      <div className="filter my-3 ">
        <select
          value={selectFilter}
          onChange={(e) => setSelectFilter(e.target.value)}
          className="border outline-0 p-2 cursor-pointer   w-70"
        >
          <option value="all" className="cursor-pointer">
            All
          </option>
          <option value="available" className="cursor-pointer">
            Available
          </option>
          <option value="maintance" className="cursor-pointer">
            Maintance
          </option>
          <option value="busy" className="cursor-pointer">
            Busy
          </option>
        </select>
      </div>
      <div className="robo-list grid md:grid-cols-4  gap-3">
        {filteredRobo.map((robo, idx) => (
          <div className="bg-white shadow-lg p-4" key={idx}>
            <h4 className="text-2xl">Name: {robo.name}</h4>
            <h4 className="text-2xl">Battry: {robo.battery}</h4>
            <h4 className="text-2xl">Status: {robo.status}</h4>
          </div>
        ))}
      </div>
    </MyContainer>
  );
};

export default RoboAppContainer;
