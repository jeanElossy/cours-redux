import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { deletePost, editPost } from "../actions/post.action";
import Likes from "./Likes";
import { isEmpty } from "./Utils"

const Post = ({post}) => {

    const user = useSelector(state => state.userReducer);
    const [editContent, setEditContent] = useState(post.content)
    const [editToggle, setEditToggle] = useState(false);
    const dispatch = useDispatch();


    const handleEdit = (e) => {
        e.preventDefault();

        const postData = {
            tilte: post.title,
            content: editContent,
            author: user[0].pseudo,
            id: post.id,
            likes: post.likes
        };

        dispatch(editPost(postData));
        setEditToggle(false);
    };


    return (
        <>
            <div className="card w-25 p-3 m-5">
                {!isEmpty(user[0]) && (user[0].pseudo === post.author) && (

                    <div className="text-center">
                        <button
                            className="btn btn-outline-success"
                            onClick={() => setEditToggle(!editToggle)}
                        >
                            Edit
                        </button>

                        <button 
                            className="btn btn-outline-danger ms-3"
                            onClick={() => dispatch(deletePost(post.id))} 
                        >
                            Delete
                        </button>
                    </div>
                )}

                <h1 className="h4">{post.title}</h1>

                
                {editToggle ? (
                    <form>

                        <textarea 
                            cols="38" 
                            rows="3" 
                            style={{resize:"none"}}
                            defaultValue={post.content}
                            className="form-control"
                            onChange={(e) => setEditContent(e.target.value)}
                        />

                        <div className="float-end">
                            <input 
                                type="submit" 
                                value="valider"
                                className="btn btn-success mt-2"
                                onClick={(e) => handleEdit(e)}
                            />
                        </div>

                    </form>
                ) : (

                    <p className="mt-3">{post.content}</p>
                    
                )}

                <div className="d-flex justify-content-between mt-3">
                    
                    {post.author}

                    <Likes post={post} /> 
                    
                </div>
            </div>
            
        </>
        
    )
}

export default Post
