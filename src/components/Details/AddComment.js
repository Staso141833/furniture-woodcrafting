import "./details.css";
import { useForm } from "../../hooks/useForm.js";
import { useState } from "react";

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );

  const [formErrors, setFormErrors] = useState({
    comment: "",
  });

  const formValidate = (e) => {

    e.preventDefault();

    const errors = {};
    if (values.comment === "") {
      errors.comment = "The comment must have content";
    } else {
      errors.comment = "";
    }

    setFormErrors(errors);
    const hasErrors = Object.values(errors).some((value) => value);

    if (!hasErrors) {
      onSubmit(e);
    }
  
  };

  

  return (
    <article className="comment-furniture">
      <form className="form-add-comment" onSubmit={formValidate}>
        <textarea
          className="text-area"
          name="comment"
          placeholder="Share opinion......"
          value={values.comment}
          onChange={changeHandler}
        ></textarea>
        <div className="error-container">
          <p>{formErrors.comment}</p>
        </div>
        <button className="btn-add-comment" type="submit" value="Add Comment">
          Add comment
        </button>
      </form>
    </article>
  );
};
