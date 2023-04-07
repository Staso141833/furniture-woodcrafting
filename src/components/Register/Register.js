import "./register.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm.js";
import { AuthContext } from "../../contexts/AuthContext.js";


export const Register = () => {

  const { onRegisterSubmit} = useContext(AuthContext);
  const { values, changeHandler, onSubmit} = useForm({
      email: '',
      password: '',
      rePassword: '',
  }, onRegisterSubmit);



    return (
        <section id="register">
        <div className="form-conainter">

     
          <form className="form-register" method="POST" onSubmit={onSubmit}>
              <h2>Register</h2>
              <h3>Register to get the best offers!</h3>
            <input
              type="email"
              name="email"
              id="email-register"
              placeholder="email"
              value={values.emal}
              onChange={changeHandler}
            />

            <input
              type="password"
              name="password"
              id="email-password"
              placeholder="password"
              value={values.password}
              onChange={changeHandler}
            />

            <input
              type="password"
              name="rePassword"
              id="email-re-password"
              placeholder="re-password"
              value={values.rePassword}
              onChange={changeHandler}
            />

            <button className="btn-register" type="submit">Register</button>
            <div className="already-registered">
              <p className="message">Already registered?<i className="fas fa-angle-double-right"></i> <Link to="/login">Login</Link></p>
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