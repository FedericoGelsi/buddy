import React from "react";
import BannerSuperior from "./BannerSuperior";

function ActivityWrapper(props) {
  const { children } = props;
  return (
    <div className="container">
      <BannerSuperior />
      <div className="p-8 min-h-[85%] rounded-3xl flex flex-col justify-center bg-T500">
        {children}
      </div>
    </div>
  );
}

export default ActivityWrapper;
