import { useState } from "react";
import axios from "axios";

const useAddToDo = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  // const { setTodos } = useTodoStore((state) => state);

  const addTodo = async (title, body) => {
    setIsLoading(true);

    const url = import.meta.env.VITE_API + "/todo/add";

    try {
      const response = await axios.post(
        url,
        { title, body },
        { withCredentials: true }
      );
      const data = response.data;
      setMessage(data.msg);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data);
      setIsLoading(false);
    }
  };
  return { addTodo, error, isLoading, message };
};

export default useAddToDo;
