import axios from "axios";
import { useState } from "react";
import { useTodoStore } from "../store/store";

const useGetUserToDo = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { setPersonalTodo } = useTodoStore((state) => state);

  const getPersonalTodo = async () => {
    setIsLoading(true);
    try {
      const url = import.meta.env.VITE_API + "/todo";
      const response = await axios.post(url, {}, { withCredentials: true });
      setPersonalTodo(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data);
      setIsLoading(false);
    }
  };
  return { getPersonalTodo, error, isLoading };
};

export default useGetUserToDo;
