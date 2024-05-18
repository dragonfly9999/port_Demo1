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
      <div className="container mx-auto flex items-center">
        <Avatar isDevImg={isDevImg} setIsDevImg={setIsDevImg} />
        <Infor isDevImg={isDevImg} setIsDevImg={setIsDevImg} />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default DemoFc;
