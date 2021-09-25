import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import getPots, { addPosts } from "../actions/post.action";

const PostForm = () => {

    const [title, setTtilte] = useState("");
    const [content, setContent] = useState("");
    const users = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const handleClick = async (e) => {
        e.preventDefault();
        if (title && content) {
            const data = {
                title,
                content,
                author: users[0].pseudo,
                likes : 0
            }
            await dispatch(addPosts(data));
            setContent("")
            setTtilte("")
            dispatch(getPots());
        }else{
            alert("Merci de renseigner tous les champs")
        }
    }

    return (
        <div className="w-25 card m-5 p-3">

            <form 
                className="form-group" 
            >
                <input  
                    type="text"
                    className="form-control mt-4"
                    value={title}
                    onChange={(e) => setTtilte(e.target.value)}
                />

                <textarea   
                    cols="30" 
                    rows="4" 
                    className="form-control mt-4" 
                    style={{resize:"none"}}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    >
                        texte
                </textarea>

                <div className="btn float-end">
                    <input 
                        type="submit" 
                        value="poster"  
                        className="btn btn-success mt-4"
                        onClick={(e) => handleClick(e)}
                    />
                </div>
            </form>

        </div>
    )
}

export default PostForm



