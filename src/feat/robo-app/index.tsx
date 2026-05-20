import MyContainer from "@/my-components/MyContainer";
import React from "react";
import { roboData } from "./const/roboData";

const RoboAppContainer = () => {
  return (
    <MyContainer>
      <h1 className="text-3xl mb-3 px-4 ">All Robots List</h1>
      <div className="robo-list grid md:grid-cols-4  gap-3">
        {roboData.map((robo, idx) => (
          <div className="bg-white p-4" key={idx}>
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
