import React, { useState } from "react";
import devIkon from "./../../assets/image/imgDemo/dev-ikon.jpg";
import ysIkon from "./../../assets/image/imgDemo/ys-ikon.jpg";
import Infor from "./../LayoutDemo/Infor";
import Avatar from "../LayoutDemo/Avatar";
import About from "../LayoutDemo/About";

const DemoFc = () => {
  const [isDevImg, setIsDevImg] = useState(false);

  return (
    <div>
      <div className="container fixDaIpadAir mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20">
        <div>
          <Avatar isDevImg={isDevImg} setIsDevImg={setIsDevImg} />
        </div>
        <div>
          <Infor isDevImg={isDevImg} setIsDevImg={setIsDevImg} />
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default DemoFc;
