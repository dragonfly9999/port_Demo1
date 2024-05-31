import React from "react";

const FooterDemo = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-5">
        <div className="align-middle text-center">
          <div className="text-gray-500 font-bold text-2xl">Long Ngo</div>
          <div className="ikonFT py-2">
            <a
              className="iconContent text-gray-500 hover:text-blue-400 text-2xl mr-2"
              href="https://github.com/dragonfly9999"
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              className="iconContent text-gray-500 hover:text-blue-400 text-2xl"
              href="https://www.linkedin.com/in/wir-hen-593689309/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <hr className="mb-2 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <div className="items-center">
          <span className="block text-xl text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 copyright Long Ngo
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterDemo;
