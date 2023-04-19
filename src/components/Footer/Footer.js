import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-social-media">
        <div>
          <p className="connect-ges">Connect with GES</p>
        </div>

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

      <div className="footer-nav">
        <ul className="nav-ul">
          <li className="nav-items">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-items">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-items">
            <Link to="/register">Register</Link>
          </li>
          <li className="nav-items">
            <Link to="home">About us</Link>
          </li>
          <li className="nav-items">
            <Link to="/home">Contacts</Link>
          </li>
        </ul>
      </div>

      <div className="footer-copy-right">
        <p>
          INFERNO Copyright <i className="far fa-copyright"></i> 2023 Inferno -
          All rights reserved || Designed By: S. Stiptsov
        </p>
      </div>
    </div>
  );
};
