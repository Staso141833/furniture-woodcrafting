import "./details.css";

import { useParams, useNavigate } from "react-router-dom";
import { furnitureServiceFactory } from '../../services/furnitureService.js';
import { useEffect, useState, useContext } from "react";
import { useService } from "../../hooks/userService.js";
import { AuthContext } from "../../contexts/AuthContext.js";



export const Details = () => {

  const { userId } = useContext(AuthContext);
  const { furnitureId } = useParams();
  const [furniture, setFurniture] = useState({});
  const {furnitureService} =  useService(furnitureServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    furnitureService.getOne(furnitureId)
      .then(result => {
        setFurniture(result)})
  }, [furnitureId])

  const isOwner = furniture._ownerId === userId;

  const onDeleteClick = async () => {
   await furnitureService.delete(furniture._id);
    navigate('/catalog')

  }
    
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

        {isOwner && (
          <div className="action-buttons">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn"onClick={onDeleteClick}>Delete</button>
            <button className="comment-btn">Comment</button>
          </div>
        )}
     
      </div>
    </section>
  );
};
