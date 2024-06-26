import React from "react";
import { motion } from "framer-motion";
import devIkon from "./../../assets/image/imgDemo/dev-ikon.jpg";
import ysIkon from "./../../assets/image/imgDemo/ys-ikon.jpg";
import "./../../utils/demoFix/style.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const Avatar = ({ isDevImg }) => {
  return (
    <div>
      <ScrollAnimation
        animateIn=" animate__fadeInDown"
        duration={2}
        delay={600}
      >
        <div
          className="imgDemo ml-40 overflow-hidden"
          style={{ width: "420px", height: "420px" }}
        >
          <motion.img
            src={isDevImg ? ysIkon : devIkon}
            alt=""
            className="w-full h-full"
            style={{
              objectFit: "cover",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }} // Tăng kích thước khi hover
            whileTap={{ scale: 0.95 }} // Giảm kích thước khi click
            initial={{ opacity: 0 }} // Xác định trạng thái ban đầu
            animate={{ opacity: 1 }} // Chuyển đổi sang trạng thái hiện tại
            transition={{ duration: 0.5 }} // Thời gian chuyển đổi
          />
        </div>
        <div className="link-icon flex items-center justify-center">
          <a
            className="icon-demo"
            href="mailto:henwir42@gamil.com"
            target="_blank"
          >
            <i className="fa-solid fa-envelope-open-text"></i>
          </a>
          <a
            className="icon-demo mx-10"
            href="https://github.com/dragonfly9999"
            target="_blank"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            className="icon-demo"
            href="https://www.linkedin.com/in/wir-hen-593689309/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Avatar;
