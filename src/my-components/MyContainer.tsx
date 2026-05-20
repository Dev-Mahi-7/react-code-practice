import React, { ReactNode } from "react";

const MyContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-300 mx-auto bg-amber-50 min-h-screen p-2 ">
      {children}
    </div>
  );
};

export default MyContainer;
