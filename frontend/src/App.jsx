import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import { useUserStore } from "./store/store";
import { useEffect } from "react";
import useGetUserToDo from "./hooks/useGetUserToDo";
import useGetAllToDo from "./hooks/useGetAllToDo";
// import LoadingPage from "./components/LoadingPage";
import { RingLoader } from "react-spinners";
import RootRoute from "./routes/rootRoute";

function App() {
  const { userInfo } = useUserStore((state) => state);
  const { getToDo, isLoading } = useGetAllToDo();
  const { getPersonalTodo } = useGetUserToDo();

  useEffect(() => {
    const fetch = async () => {
      await getToDo();
      await getPersonalTodo();
    };
    fetch();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RingLoader color="#36d7b7" size={200} />;
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<RootRoute />} />
        <Route path="/login" element={!userInfo ? <Login /> : <Home />} />
        <Route path="/register" element={!userInfo ? <Register /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
