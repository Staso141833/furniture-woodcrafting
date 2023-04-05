import "./details.css";

export const Details = () => {
  return (
    <section id="details">
      <div className="details-wrapper">
        <div className="details-wrapper-img-container">
        <img
          className="details-img"
          src="https://www.pluck.co.uk/wp-content/uploads/2023/03/Pluck-Birmingham-Kitchen-1-1600x1067.jpg"
          alt="dveri"
        />
        </div>
  
        <p className="details-kind-of-furniture">Woodcarv</p>
        <p className="details-type-of-wood">
          Wood type: <span className="type-of-wood-span">Oak</span>
        </p>
        <p className="details-price">
          Price: <span className="price-number">1250.99</span>€
        </p>

        <p className="details-width-height">Width: 300mm x Height: 400mm</p>

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
