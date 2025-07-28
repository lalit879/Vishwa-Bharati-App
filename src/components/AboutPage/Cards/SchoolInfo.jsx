import React from "react";
import LeftPanel from "./LeftPanel";
import InfoGrid from "./InfoGrid";

const SchoolInfo = () => {
  return (
    <div className="min-h-screen my-10 flex flex-col items-center">
      
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl px-4">
        <LeftPanel />
        <InfoGrid />
      </div>
    </div>
  );
};

export default SchoolInfo;