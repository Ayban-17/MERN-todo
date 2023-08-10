import Logo from "./Logo";
import NavBar from "./NavBar";
import { useUserStore } from "../../store/store";
import "./header.css";
import { useEffect } from "react";
import axios from "axios";

const Header = () => {
  const { setUserInfo, setIsLoading, setError } = useUserStore(
    (state) => state
  );
  useEffect(() => {
    const session = async () => {
      setIsLoading(true);
      const baseUrl = import.meta.env.VITE_API;
      try {
        const response = await axios.post(
          `${baseUrl}/users/auth`,
          {},
          {
            withCredentials: true,
          }
        );
        const data = response.data;
        setUserInfo(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data.error);
      }
    };
    session();
  }, [setUserInfo, setIsLoading, setError]);
  return (
    <header className="header-container">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
