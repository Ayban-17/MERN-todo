// import { useEffect } from "react";
import { useTodoStore } from "../../store/store";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
// import useGetAllToDo from "../../hooks/useGetAllToDo";
import PersonalTodo from "./PersonalTodo";
// import useGetUserToDo from "../../hooks/useGetUserToDo";

const Home = () => {
  const { todos, personalTodos } = useTodoStore((state) => state);

  return (
    <main>
      <section className="home-main-container">
        <div className="home-container">
          <div className="todo-main-container">
            {todos.map((todo) => {
              return <Todo key={todo._id} {...todo} />;
            })}
          </div>
          <AddTodo />
        </div>
      </section>
      <section className="personal-todo">
        <div className="todo-main-container">
          {personalTodos.map((todo) => {
            return <PersonalTodo key={todo._id} {...todo} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
