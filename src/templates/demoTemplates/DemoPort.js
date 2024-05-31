import React, { useState, useEffect } from "react";
import HeaderDemo from "../../components/HeaderDemo/HeaderDemo";
import FooterDemo from "../../components/FooterDemo/FooterDemo";
import { Outlet } from "react-router-dom";
import Loading from "../../page/Loading/Loading";

const DemoPort = () => {
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <HeaderDemo setIsActive={setIsActive} isActive={isActive} />
          <Outlet />
          <FooterDemo />
        </div>
      )}
    </>
  );
};

export default DemoPort;
