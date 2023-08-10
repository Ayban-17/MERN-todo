import Form from "./Form";
import "../../components/index.css";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/store";

const Login = () => {
  const api = import.meta.env.VITE_API;
  const navigateTo = useNavigate();
  const { setUserInfo } = useUserStore((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${api}/users/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setUserInfo(data);
      navigateTo("/");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-label">Login</h1>
      <Form
        handleSubmitLogin={handleSubmitLogin}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Login;
