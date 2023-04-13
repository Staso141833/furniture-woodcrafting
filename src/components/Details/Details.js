import "./details.css";

import { Link } from "react-router-dom";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";
import * as commentService from "../../services/commentService.js";

import { useService } from "../../hooks/userService.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { furnitureServiceFactory } from "../../services/furnitureService.js";
import { furnitureReducer } from "../../reducers/funritureReducer.js";
import { AddComment } from "./AddComment.js";
import { useFurnitureContext } from "../../contexts/FurnitureContext.js";

export const Details = () => {
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const { furnitureId } = useParams();
  const { deleteFurniture } = useFurnitureContext();
  const [furniture, dispatch] = useReducer(furnitureReducer, {});
  const furnitureService = useService(furnitureServiceFactory);

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      furnitureService.getOne(furnitureId),
      commentService.getAll(furnitureId),
    ]).then(([furnitureData, comments]) => {
      const furnitureState = {
        ...furnitureData,
        comments,
      };
      dispatch({ type: "FURNITURE_FETCH", payload: furnitureState });
    });
  }, [furnitureId]);

  const isOwner = furniture._ownerId === userId;

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(furnitureId, values.comment);

    dispatch({
      type: "COMMENT_ADD",
      payload: response,
      userEmail,
    });
  };

  const onDeleteClick = async () => {
    const result = "Are you sure you want to delete this furniture?";

    if (result) {
      await furnitureService.delete(furniture._id);

      deleteFurniture(furniture._id);

      navigate("/catalog");
    }
  };

  return (
    <section id="details">

      <div id="details-comments">
            <div className="details-wrapper">
              <div className="details-wrapper-img-container">
                <img className="details-img" src={furniture.imageUrl} alt="dveri" />
              </div>

              <p className="details-kind-of-furniture">{furniture.kind}</p>
              <p className="details-type-of-wood">
                Wood type: <span className="type-of-wood-span">{furniture.wood}</span>
              </p>
              <p className="details-price">
                Price: <span className="price-number">{furniture.price}</span>€
              </p>

              <p className="details-width-height">
                Width: {furniture.width}mm x Height: {furniture.height}mm
              </p>

              <div className="edit-delete-back-btns-container">
              <Link to={"/catalog"} className="back-btn">Back</Link>
                {isOwner && (
                  <div className="action-buttons">
                    <Link to={`/catalog/:${furniture._id}/edit`} className="edit-btn">Edit</Link>
                    <button className="delete-btn" onClick={onDeleteClick}>Delete</button>
                  </div>
              )}    
              </div>
           </div>


            <div className="details-comments-and-add-comments">
                    <div className="details-comments-container">
                          <h2 className="comments-title">Comments:</h2>
                          <ul className="comments-ul">
                            {furniture.comments &&
                              furniture.comments.map((x) => (
                                <li key={x._id} className="comments-li">
                                  <p className="comments-p">
                                    {x.author.email}: {x.comment}
                                  </p>
                                
                                </li>
                              ))}

                              {!furniture.comments?.length && ( <p className="no-comments">No comments</p>)}
                          </ul>
                      
                        </div>

                        {isAuthenticated && (
                      <div className="add-comment-container">
                        <AddComment onCommentSubmit={onCommentSubmit} />  
                      </div>
                        )}
            </div>
      </div>
      
            
  
    </section>
  );
};
