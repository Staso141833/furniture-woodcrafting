import { Link } from "react-router-dom";
import "../catalog.css";

export const CatalogItem = ({ 
  kind,
  price,
  imageUrl }) => {
  return (
    <div className="furniture">
      <img className="image" src={imageUrl} alt={imageUrl} />

      <div className="furniture-content">
      <p className="kind">{kind}</p>
      <p>
        <strong>Price:</strong>
        <span className="price">{price}</span>$
      </p>
      <button className="details-btn">
        <Link to="/details" className="details-anchor"></Link>Details
      </button>

      </div>
    
    </div>
  );
};
