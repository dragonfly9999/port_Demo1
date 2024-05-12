import React from 'react'
import HeaderDemo from '../../components/HeaderDemo/HeaderDemo'
import FooterDemo from '../../components/FooterDemo/FooterDemo'
import { Outlet } from 'react-router-dom'

const DemoPort = () => {
  // set up một template dành cho tất cả các trang
  // Phía trên là Header, ở giữa là nội dung các component, rồi đến footer
  return (

    <div>
      <HeaderDemo />
      <Outlet />
      <FooterDemo />
    </div>
  )
}

export default DemoPort