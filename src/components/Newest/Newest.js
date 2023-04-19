import "./newest.css";
import { Link } from "react-router-dom";

export const Newest = () => {
  return (
    <section id="newest">
      <h2>Products</h2>

      <div className="products">
        <div className="product">
          <img
            src="https://assets.architecturaldigest.in/photos/60ab3a15b872edd1c5ce586f/master/pass/7%20things%20to%20consider%20when%20designing%20a%20modular%20kitchen%202.jpeg"
            alt="example1"
          />
          <p className="title">White oak</p>
          <p>
            <strong>Price:</strong>
            <span className="price">23.99</span>$
          </p>
          <button className="details-btn">
            <Link to="/details" className="details-anchor"></Link>Details
          </button>
        </div>
        <div className="product">
          <img
            src="https://assets.architecturaldigest.in/photos/60ab3a15b872edd1c5ce586f/master/pass/7%20things%20to%20consider%20when%20designing%20a%20modular%20kitchen%202.jpeg"
            alt="example1"
          />
          <p className="title">White oak</p>
          <p>
            <strong>Price:</strong>
            <span className="price">23.99</span>$
          </p>
          <button className="details-btn">
            <Link to="/details" className="details-anchor"></Link>Details
          </button>
        </div>
        <div className="product">
          <img
            src="https://assets.architecturaldigest.in/photos/60ab3a15b872edd1c5ce586f/master/pass/7%20things%20to%20consider%20when%20designing%20a%20modular%20kitchen%202.jpeg"
            alt="example1"
          />
          <p className="title">White oak</p>
          <p>
            <strong>Price:</strong>
            <span className="price">23.99</span>$
          </p>
          <button className="details-btn">
            <Link to="/details" className="details-anchor"></Link>Details
          </button>
        </div>
        <div className="product">
          <img
            src="https://assets.architecturaldigest.in/photos/60ab3a15b872edd1c5ce586f/master/pass/7%20things%20to%20consider%20when%20designing%20a%20modular%20kitchen%202.jpeg"
            alt="example1"
          />
          <p className="title">White oak</p>
          <p>
            <strong>Price:</strong>
            <span className="price">23.99</span>$
          </p>
          <button className="details-btn">
            <Link to="/details" className="details-anchor"></Link>Details
          </button>
        </div>
        <div className="product">
          <img
            src="https://assets.architecturaldigest.in/photos/60ab3a15b872edd1c5ce586f/master/pass/7%20things%20to%20consider%20when%20designing%20a%20modular%20kitchen%202.jpeg"
            alt="example1"
          />
          <p className="title">White oak</p>
          <p>
            <strong>Price:</strong>
            <span className="price">23.99</span>$
          </p>
          <button className="details-btn">
            <Link to="/details" className="details-anchor"></Link>Details
          </button>
        </div>
        <div className="product">
          <img
            src="https://assets.architecturaldigest.in/photos/60ab3a15b872edd1c5ce586f/master/pass/7%20things%20to%20consider%20when%20designing%20a%20modular%20kitchen%202.jpeg"
            alt="example1"
          />
          <p className="title">White oak</p>
          <p>
            <strong>Price:</strong>
            <span className="price">23.99</span>$
          </p>
          <button className="details-btn">
            <Link to="/details" className="details-anchor"></Link>Details
          </button>
        </div>
      </div>
    </section>
  );
};
