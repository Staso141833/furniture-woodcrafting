import "./login.css";

import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { useForm } from "../../hooks/useForm.js";
import { useState } from "react";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const Login = () => {
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );

  const formValidate = (e) => {
    e.preventDefault();
    const errors = {};

    if (
      values[LoginFormKeys.Email].length < 10 ||
      values[LoginFormKeys.Email].length > 32
    ) {
      errors.email = "Email should be between 10 and 32 characters";
    } else {
      errors.email = "";
    }

    if (
      values[LoginFormKeys.Password].length < 5 ||
      values[LoginFormKeys.Password].length > 14
    ) {
      errors.password = "Password should be between 6 and 14 characters";
    } else {
      errors.password = "";
    }

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      onSubmit(e);
    }
  };

  return (
    <section id="login">
      <div className="form-conainter">
        <form className="form-login" method="POST" onSubmit={formValidate}>
          <h2>Welcome</h2>

          <div className="login-input-error-container">
            <input
              type="email"
              name={LoginFormKeys.Email}
              id="email-login"
              placeholder="email"
              value={values[LoginFormKeys.Email]}
              onChange={changeHandler}
            />
            <div className="login-error-container">
              {formErrors.email && (
                <p className="login-error-container-p">{formErrors.email}</p>
              )}
            </div>
          </div>

          <div className="login-input-error-container">
            <input
              type="password"
              name={LoginFormKeys.Password}
              id="email-password"
              placeholder="password"
              value={values[LoginFormKeys.Password]}
              onChange={changeHandler}
            />

            <div className="login-error-container">
              {formErrors.password && (
                <p className="login-error-container-p">{formErrors.password}</p>
              )}
            </div>
          </div>

          <button className="btn-login" type="submit">
            Login
          </button>
          <div className="have-not-registered">
            <p className="message">You haven't registered yet? </p>
            <i className="fas fa-angle-double-down"></i>
            <Link to="/register"><span className="register">Register</span></Link>
          </div>
        </form>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
          <div className="drop drop-6"></div>
          <div className="drop drop-7"></div>
        </div>
      </div>
    </section>
  );
};
