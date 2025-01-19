import React from "react";
import "./LoadingOverlay.css";
import { Aperture } from "lucide-react";

const LoadingOverlay = () => {
  return (
    <div className="loading-screen">
      {/* <img
        src="/icons/wda-fav-color.svg"
        alt="Loading"
        className="spinning-image"
      /> */}
      <Aperture className="spinning-image" />
    </div>
  );
};

export default LoadingOverlay;
