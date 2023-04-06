import "./details.css";

import { useParams } from "react-router-dom";
import * as furnitureService from '../../services/furnitureService.js';
import { useEffect, useState } from "react";


export const Details = () => {

  const { furnitureId } = useParams();
  const [furniture, setFurniture] = useState({});

  useEffect(() => {
    furnitureService.getOne()
      .then(result => {
        setFurniture(result)})
  }, [furnitureId])

  return (
    <section id="details">
      <div className="details-wrapper">
        <div className="details-wrapper-img-container">
        <img
          className="details-img"
          src={furniture.imageUrl}
          alt="dveri"
        />
        </div>
  
        <p className="details-kind-of-furniture">{furniture.kind}</p>
        <p className="details-type-of-wood">
          Wood type: <span className="type-of-wood-span">{furniture.wood}</span>
        </p>
        <p className="details-price">
          Price: <span className="price-number">{furniture.price}</span>€
        </p>

        <p className="details-width-height">Width: {furniture.width}mm x Height: {furniture.height}mm</p>

        <h4 className="details-comments">
          Comments: <span className="comments">0</span> times.
        </h4>

        <div className="action-buttons">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>

          <button className="comment-btn">Comment</button>
        </div>
      </div>
    </section>
  );
};
