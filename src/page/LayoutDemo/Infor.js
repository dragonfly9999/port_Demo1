import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "./../../utils/demoFix/style.css";

const Infor = ({ isDevImg, setIsDevImg }) => {
  return (
    <div className="inforBox">
      <ScrollAnimation
        animateIn=" animate__fadeInDown"
        duration={3}
        delay={700}
      >
        <div className="infor-content">
          <h1 className="font-bold leading-normal text-5xl">
            Hi, <br />
            I'm{" "}
            <span className="text-violet-400 font-normal font-hover">
              Long Ngo
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
            className="butContent py-3 px-8 bg-gray-600 text-white rounded-lg shadow hover:shadow-xl text-sm md:text-base lg:text-lg"
          >
            View Avatar
          </button>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Infor;
