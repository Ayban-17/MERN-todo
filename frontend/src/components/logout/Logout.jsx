import axios from "axios";
import { useUserStore } from "../../store/store";

const Logout = () => {
  const { setUserInfo } = useUserStore();
  const logout = async () => {
    const url = import.meta.env.VITE_API + "/users/logout";
    try {
      await axios.post(url, {}, { withCredentials: true });
      setUserInfo(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={logout} className="logout-button">
      Logout
    </div>
  );
};

export default Logout;
