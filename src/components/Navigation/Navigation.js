import navigation from "./navigation.css"
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <>
        <header className="header">
        <div className="social-media-logo">
          <a className="logo" href="/"><img src="./GES.jpg" alt="logo"/></a>

          <div className="social-media">
            <a className="facebook" href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="twitter" href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="linkedin-in" href="/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="instagram" href="/">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="youtube" href="/">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div>
          <nav>
        
            <ul className="nav-ul">
              <li className="nav-items"><a href="/">Home</a></li>
              <li className="nav-items"><Link to="/login">Login</Link></li>
              <li className="nav-items"><a href="/register">Register</a></li>
              <li className="nav-items-dropbtn">   <div className="dropdown">
                <button className="dropbtn">Products</button>
                <div className="dropdown-content">
                  <a href="/">Kitchens</a>
                  <a href="/">Bedrooms</a>
                  <a href="/">Woodcrafts</a>
                </div>
              </div></li>

           
              <li className="nav-items"><a href="/">About us</a></li>
              <li className="nav-items"><a href="/">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </header>
      </>
    )
}