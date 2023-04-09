import "./details.css";
import { useForm } from "../../hooks/useForm.js"

export const AddComment = ({
    onCommentSubmit
}) => {

    const {values, changeHandler, onSubmit} = useForm({
        comment: '',
      }, onCommentSubmit)
    return (
        <article className="comment-furniture">
            <button className="comment-btn">Comment</button>
            <form className="form" onSubmit={onSubmit}>
                    <input 
                    type="text" 
                    name="username" 
                    placeholder='Georgi' 
                    value={values.comment} 
                    onChange={changeHandler} />
                    
                    <textarea name="comment" 
                    placeholder="Comment......" 
                    value={values.comment} 
                    onChange={changeHandler}>   
                    </textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
        </article>
       
    )
}