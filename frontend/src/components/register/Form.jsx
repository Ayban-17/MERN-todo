import Button from "./Button";
import PropTypes from "prop-types";
const Form = ({ handleSubmitRegister, setEmail, setPassword }) => {
  return (
    <form className="register-form" onSubmit={handleSubmitRegister}>
      <input
        type="text"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button />
    </form>
  );
};

Form.propTypes = {
  handleSubmitRegister: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default Form;
