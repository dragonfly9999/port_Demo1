import React, { useState } from "react";
import axios from 'axios';

const SkillDemo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          email,
          password,
        }
      );
      setSuccessMessage("Đăng ký thành công");
      setErrorMessage(""); // Xóa thông báo lỗi nếu có
      console.log(response.data, "thành công");
    } catch (error) {
      setErrorMessage("Đăng ký thất bại. Vui lòng thử lại.");
      setSuccessMessage(""); // Xóa thông báo thành công nếu có
      console.error("Đăng ký thất bại:", error);
    }
  };

  return (
    <div>
      <h2>Đăng Ký</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Đăng Ký</button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default SkillDemo;
