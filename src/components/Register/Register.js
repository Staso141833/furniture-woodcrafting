import register from "./register.css";

export const Register = () => {
    return (
        <section id="register">
        <div className="form-conainter">

     
          <form className="form-register">
              <h2>Welcome</h2>
              <h3>Register to get the best offers!</h3>
            <input
              type="email"
              name="email"
              id="email-register"
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

            <button className="btn-register" type="submit">Register</button>
            <div className="already-registered">
              <p className="message">Already registered?<i className="fas fa-angle-double-right"></i> <a href="/login">Login</a></p>
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