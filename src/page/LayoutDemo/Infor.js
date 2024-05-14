import React from "react";
import 'animate.css'

const Infor = ({isDevImg, setIsDevImg}) => {
  return (
    <div className="w-3/5 mx-300 ml-40 font-sans animate__animated animate__fadeInDown">
      <div className="infor-content ">
        <h1 className="font-bold leading-normal text-4xl">
          Hi, <br />
          I'm{" "}
          <span className="text-red-300 font-normal hover:font-bold">
            Ngoc Long
          </span>
          <br />
          Full Stack <br />
          Fresher <br />
          Developer
        </h1>
      </div>
      <div className="butDemo mt-6">
        <button
          onClick={() => {
            setIsDevImg(!isDevImg);
          }}
          className="py-3 px-5 bg-blue-600 text-white rounded-lg"
        >
          Real Life
        </button>
      </div>
    </div>
  );
};

export default Infor;
