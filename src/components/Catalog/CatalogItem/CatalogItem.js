import { Link } from "react-router-dom";
import "../catalog.css";

export const CatalogItem = ({ 
  _id,
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
      {/* <button className="details-btn"Link to={`/catalog/${_id}`}>Details</button> */}
      <Link to={`/catalog/${_id}`} className="details-btn">Details</Link>
      {/* < className="details-anchor"> */}
      </div>
    
    </div>
  );
};
