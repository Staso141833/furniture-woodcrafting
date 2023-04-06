import "./login.css";

import { AuthContext } from "../../contexts/AuthContext.js";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm.js";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password',
}

export const Login = () => {

  const { onLoginSubmit } = useContext(AuthContext);
  const {values, changeHandler, onSubmit} = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  },onLoginSubmit)




    return (
        <section id="login">
        <div className="form-conainter">

     
          <form className="form-login" method="POST" onSubmit={onSubmit}>
              <h2>Welcome</h2>
              <h3>Login</h3>
            <input
              type="email"
              name={LoginFormKeys.Email}
              id="email-login"
              placeholder="email"
              value={values[LoginFormKeys.Email]}     
              onChange={changeHandler}       
            />

            <input
              type="password"
              name={LoginFormKeys.Password}
              id="email-password"
              placeholder="password"
              value={values[LoginFormKeys.Password]}
              onChange={changeHandler}             
            />

            <button className="btn-login" type="submit">Login</button>
            <div className="have-not-registered">
              <p className="message">You haven't registered yet? </p>
              <i className="fas fa-angle-double-down"></i>
              <a href="/register">Register</a>
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
    )
}
