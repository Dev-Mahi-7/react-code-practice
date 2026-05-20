import { navItems } from "@/const/navItems";
import Link from "next/link";
import React from "react";

const HomeContainer = () => {
  const getTextSize = (name: string) => {
    if (name.length <= 5) return "text-4xl";
    if (name.length <= 10) return "text-3xl";
    if (name.length <= 15) return "text-2xl";

    return "text-xl";
  };
  return (
    <div className=" max-w-300 mx-auto">
      <div className="header bg-amber-100 p-4 flex gap-10 items-center">
        <h2 className="font-bold text-3xl flex-1">Mukesh Rathod</h2>
        <div className="search border overflow-clip border-gray-200 flex items-center gap-2 ">
          <input
            type="text"
            className="flex-1 p-6 w-full h-full outline-0 text-lg"
            placeholder="Enter task name"
          />
          <button className="bg-white cursor-pointer h-full p-6 font-bold">
            Search
          </button>
        </div>
      </div>
      <div className="main grid md:grid-cols-6 mt-3  gap-3 ">
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            className={`border border-gray-200 shadow-lg transition-all hover:shadow-2xl flex min-h-20 p-2 ${getTextSize(item.name)}`}
            key={idx}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
