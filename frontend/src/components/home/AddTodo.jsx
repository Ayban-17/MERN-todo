import { useState } from "react";
import useAddToDo from "../../hooks/useAddToDo";
import useGetAllToDo from "../../hooks/useGetAllToDo";
import useGetUserToDo from "../../hooks/useGetUserToDo";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addTodo, error, message } = useAddToDo();
  const { getToDo } = useGetAllToDo();
  const { getPersonalTodo } = useGetUserToDo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTodo(title, body);
    await getToDo();
    await getPersonalTodo();

    setTitle("");
    setBody("");
  };

  return (
    <form className="Add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Description"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit" className="add-todo-button">
        Add To Do
      </button>
      <div>{message}</div>
      <div>{error}</div>
    </form>
  );
};

export default AddTodo;
