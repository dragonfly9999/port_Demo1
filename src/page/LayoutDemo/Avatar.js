import React from "react";
import { motion } from "framer-motion";
import devIkon from "./../../assets/image/imgDemo/dev-ikon.jpg";
import ysIkon from "./../../assets/image/imgDemo/ys-ikon.jpg";
import "./../../utils/demoFix/style.css";

const Avatar = ({ isDevImg }) => {
  return (
    <div className="w-2/5 px-auto ">
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
      <div className="link-icon flex items-start justify-end">
        <a
          className="icon-demo"
          href="https://www.facebook.com/profile.php?id=100085857054052"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a className="icon-demo mx-10" href="https://github.com/dragonfly9999">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a
          className="icon-demo"
          href="https://www.linkedin.com/in/wir-hen-593689309/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Avatar;
