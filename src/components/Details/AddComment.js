import "./details.css";
import { useForm } from "../../hooks/useForm.js";

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );
  return (
    <article className="comment-furniture">
      <form className="form-add-comment" onSubmit={onSubmit}>
        <textarea
          className="text-area"
          name="comment"
          placeholder="Share opinion......"
          value={values.comment}
          onChange={changeHandler}
        ></textarea>
        <button className="btn-add-comment" type="submit" value="Add Comment">
          Add comment
        </button>
      </form>
    </article>
  );
};
