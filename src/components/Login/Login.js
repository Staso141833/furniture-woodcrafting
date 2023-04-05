import "./login.css";

export const Login = () => {
    return (
        <section id="login">
        <div className="form-conainter">

     
          <form className="form-login">
              <h2>Welcome</h2>
              <h3>Login</h3>
            <input
              type="email"
              name="email"
              id="email-login"
              placeholder="email"
            />

            <input
              type="password"
              name="password"
              id="email-password"
              placeholder="password"
            />

            <input
              type="password"
              name="re-password"
              id="email-re-password"
              placeholder="re-password"
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
