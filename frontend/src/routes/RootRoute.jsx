import Home from "../components/home/Home";
import Login from "../components/login/Login";

import { useUserStore } from "../store/store";

const RootRoute = () => {
  const { userInfo } = useUserStore((state) => state);

  if (userInfo) {
    return <Home />;
  } else {
    return <Login />;
  }
};

export default RootRoute;
