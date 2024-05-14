import React from "react";
import { motion } from "framer-motion";
import "./../../utils/demoFix/style.css";

const Infor = ({ isDevImg, setIsDevImg }) => {
  return (
    <div className="w-3/5 mx-300 ml-40 font-sans ">
      <div className="infor-content">
        <h1 className="font-bold leading-normal text-5xl">
          Hi, <br />
          I'm{" "}
          <motion.span
            className="text-violet-400 font-normal font-hover"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Long Ngo
          </motion.span>
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
          className="py-3 px-8 bg-gray-600 text-white rounded-lg shadow hover:shadow-xl"
        >
          View Avatar
        </button>
      </div>
    </div>
  );
};

export default Infor;
