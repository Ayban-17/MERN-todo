import PropTypes from "prop-types";

const PersonalTodo = ({ title, body, userID }) => {
  return (
    <div className="todo-container">
      <h1 className="">{userID.email}</h1>
      <h2 className="todo-title ">{title} </h2>
      <p className="todo-body">{body}</p>
    </div>
  );
};

PersonalTodo.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userID: PropTypes.object.isRequired,
};

export default PersonalTodo;
