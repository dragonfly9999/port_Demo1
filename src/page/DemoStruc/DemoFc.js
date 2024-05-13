import React, { useState } from "react";
import devIkon from "./../../assets/image/imgDemo/dev-ikon.jpg";
import ysIkon from "./../../assets/image/imgDemo/ys-ikon.jpg";
import Infor from "./../LayoutDemo/Infor"; 

const DemoFc = () => {
  const [isDevImg, setIsDevImg] = useState(false);

  return (
    <div className="container mx-auto flex items-center">
      <div className="w-2/5 px-auto">
      <div className="imgDemo ml-40" style={{ width: "500px", height: "500px" }}>
              <img src={isDevImg ? devIkon : ysIkon} alt="" className="w-full h-full" style={{ objectFit: "cover" }} />
            </div>
            <div className="butDemo">
              <button
                onClick={() => {
                  setIsDevImg(!isDevImg);
                }}
                className="py-2 px-5 bg-green-600 text-white rounded-lg"
              >
                Thay ảnh đê
              </button>
            </div>
      </div>
      <Infor />
    </div>
  );
};

export default DemoFc;
