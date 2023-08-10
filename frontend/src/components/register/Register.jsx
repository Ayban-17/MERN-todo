import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const api = import.meta.env.VITE_API;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();


  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${api}/users/register`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const data = response.data;
      alert(data.msg);
        navigateTo("/login")
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-label">Register</h1>
      <Form
        handleSubmitRegister={handleSubmitRegister}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Register;
