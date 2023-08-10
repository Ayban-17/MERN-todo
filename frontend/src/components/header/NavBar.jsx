import { Link } from "react-router-dom";
import { useUserStore } from "../../store/store";
import Logout from "../logout/Logout";

const NavBar = () => {
  const { userInfo } = useUserStore((state) => state);
  return (
    <nav className="navigations">
      <div className="login-nav nav">
        {userInfo && <Logout />}
        {!userInfo && <Link to="/login">Login</Link>}
      </div>
      <div className="register-nav nav">
        {userInfo && <h1> Hello {`${userInfo.email}`}</h1>}
        {!userInfo && <Link to="/register">Register</Link>}
      </div>
    </nav>
  );
};

export default NavBar;
