import "./register.css";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm.js";
import { AuthContext } from "../../contexts/AuthContext.js";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      rePassword: "",
    },
    onRegisterSubmit
  );

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    rePassword: "",
    mustMatch: "",
  });

  const formValidate = (e) => {
    e.preventDefault();

    const errors = {};

    if (values.email.length < 10 || values.email.length > 32) {
      errors.email = "Email should be between 10 and 32 characters.";
    } else {
      errors.email = "";
    }

    if (values.password.length < 6 || values.password.length > 14) {
      errors.password = "Password should be between 6 and 14 characters.";
    } else {
      errors.password = "";
    }

    if (values.rePassword.length < 6 || values.rePassword.length > 14) {
      errors.rePassword = "Re-password should be between 6 and 14 characters.";
    } else {
      errors.rePassword = "";
    }

    if (values.password !== values.rePassword) {
      errors.mustMatch = "Passwords do not match!";
    } else {
      errors.mustMatch = "";
    }

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      onSubmit(e);
    }
  };

  return (
    <section id="register">
      <div className="form-conainter">
        <form className="form-register" method="POST" onSubmit={formValidate}>
          <h2>Register</h2>

          <div className="register-input-error">
            <input
              type="email"
              name="email"
              id="email-register"
              placeholder="email"
              value={values.email}
              onChange={changeHandler}
            />

            <div className="register-error-container">
              {formErrors.email && (
                <p className="register-error-container-p">{formErrors.email}</p>
              )}
            </div>
          </div>
          <div className="register-input-error">
            <input
              type="password"
              name="password"
              id="email-password"
              placeholder="password"
              value={values.password}
              onChange={changeHandler}
            />
            <div className="register-error-container">
              {formErrors.password && (
                <p className="register-error-container-p">
                  {formErrors.password}
                </p>
              )}
              {formErrors.mustMatch && (
                <p className="register-error-container-p">
                  {formErrors.mustMatch}
                </p>
              )}
            </div>
          </div>

          <div className="register-input-error">
            <input
              type="password"
              name="rePassword"
              id="email-re-password"
              placeholder="re-password"
              value={values.rePassword}
              onChange={changeHandler}
            />
            <div className="register-error-container">
              {formErrors.rePassword && (
                <p className="register-error-container-p">
                  {formErrors.rePassword}
                </p>
              )}
              {formErrors.mustMatch && (
                <p className="register-error-container-p">
                  {formErrors.mustMatch}
                </p>
              )}
            </div>
          </div>

          <button className="btn-register" type="submit">
            Register
          </button>
          <div className="already-registered">
            <p className="message">
              Already registered?<i className="fas fa-angle-double-right"></i>{" "}
              <Link to="/login">Login</Link>
            </p>
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
