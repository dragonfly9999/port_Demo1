import React from "react";
import * as loadingAnimation from "../../assets/animation/AnimationLoading.json";
import Lottie from "react-lottie";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
     <div className="fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-50 flex items-center">
     <Lottie options={defaultOptions} height={400} width={400} />
     </div>
    </div>
  );
};

export default Loading;
