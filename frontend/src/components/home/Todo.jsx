import PropTypes from "prop-types";

const Todo = ({ title, body, userID }) => {
  return (
    <div className="todo-container">
      <h1 className="">{userID.email}</h1>
      <h2 className="todo-title ">{title} </h2>
      <p className="todo-body">{body}</p>
    </div>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userID: PropTypes.object.isRequired,
};

export default Todo;
