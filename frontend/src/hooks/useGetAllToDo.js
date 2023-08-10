import axios from "axios";
import { useState } from "react";
import { useTodoStore } from "../store/store";

const useGetAllToDo = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { setTodos } = useTodoStore((state) => state);

  const getToDo = async () => {
    setIsLoading(true);
    const url = import.meta.env.VITE_API + "/todo";
    try {
      const response = await axios.get(url);
      const data = response.data;
      setTodos(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.error);
      setIsLoading(false);
    }
  };
  return { getToDo, error, isLoading };
};

export default useGetAllToDo;
