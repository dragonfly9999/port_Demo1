import React from "react";
import devIkon from "./../../assets/image/imgDemo/dev-ikon.jpg";
import ysIkon from "./../../assets/image/imgDemo/ys-ikon.jpg";

const Avatar = ({isDevImg}) => {
  return (
    <div className="w-2/5 px-auto">
      <div
        className="imgDemo ml-40"
        style={{ width: "400px", height: "400px" }}
      >
        <img
          src={isDevImg ? devIkon : ysIkon}
          alt=""
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Avatar;
