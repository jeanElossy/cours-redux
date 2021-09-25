import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addLike } from '../actions/post.action';
import { addLikeUser } from '../actions/user.action';

const Likes = ({ post }) => {

    const user = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleLikes = () => {

        const postData = {
            title: post.title,
            author: post.author,
            id: post.id,
            content: post.content,
            likes: ++post.likes
        };
        const userData = {
            pseudo: user[0].pseudo,
            likes: ++user[0].likes,
            id: user[0].id
        }
        dispatch(addLike(postData));
        dispatch(addLikeUser(userData));
    };

    return (
        <div 
            className="d-flex justify-content-end gap-3 align-items-center"
            onClick={handleLikes}
        >

            <div 
                className="bg-dark rounded-circle" 
                style={{width:"20px", height: "20px", cursor:"pointer"}}
            ></div>

            <span>{post.likes}</span>

        </div>
    )
}

export default Likes
