import "./navigation.css"
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext.js";
import { useContext } from "react";

export const Navigation = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

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
            <li className="nav-items"><Link to="/">Home</Link></li>
            <li className="nav-items-dropbtn">   <div className="dropdown">
                <button className="dropbtn">Products</button>
                <div className="dropdown-content">
                  <Link to="/kitchens">Kitchens</Link>
                  <Link to="/bedrooms">Bedrooms</Link>
                  <Link to="/woodcarvs">Woodcarvs</Link>
                  <Link to="/catalog">Catalog</Link>
                </div>
              </div></li>

              {isAuthenticated && (

              <>
              <li className="nav-items"> <p className="userEmail">your email: <span>{userEmail}</span></p></li>
                <li className="nav-items"><Link to="/add-furniture">Create product</Link></li>
                <li className="nav-items"><Link to="/logout">Logout</Link></li>
             
               
                </>
              )}

              {!isAuthenticated && (
                <>
                <li className="nav-items"><Link to="/login">Login</Link></li>
                <li className="nav-items"><Link to="/register">Register</Link></li>
                </>
              )}

              
           


            </ul>
          </nav>
        </div>
      </header>
      </>
    )
}