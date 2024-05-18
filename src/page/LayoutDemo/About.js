import React from "react";
import background from "./../../assets/image/imgDemo/bg-about.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import './../../utils/demoFix/style.css'

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative", // Đảm bảo container chính có vị trí tương đối
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Thêm bo viền
        borderRadius: "15px", // Thu hẹp đường viền
      }}
    >
      <ScrollAnimation
        animateIn=" animate__fadeInDown"
        duration={4}
        delay={750}
      >
      <div className="container my-20 animate__animated animate__fadeInDown ">
        <div className="tittle  flex justify-center text-5xl font-bold text-purple-200">
          <h1 className="mt-3 underline">About</h1>
        </div>

        <div className="left">
          <div className="tittle-content  text-center ">
            <p className="name px-9  text-3xl font-bold ">Long Ngo</p>
            <p className=" infor mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quasi neque dolore odio velit, vel debitis, dolorem
              repellendus eum, facilis quaerat ipsa ipsum aperiam placeat
              sapiente a alias aspernatur at.
            </p>
          </div>
          <div className="flex justify-center my-6">
            <button className=" bacsic-cv py-3 px-8 bg-blue-500 text-white rounded-lg shadow hover:shadow-xl">
              Basic CV
            </button>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
