import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_LIKE = "ADD_LIKE";

//action d'affichage d'un post 
export const  getPots = () => {
    return (dispatch) => {
        return axios    
            .get("http://localhost:3000/posts?_sort=id&_order=desc")
            .then((res) => {
                dispatch({
                    type: GET_POSTS,
                    payload: res.data
                })
            })
            .catch((err) => console.log(err))
    }
}
export default getPots;


// action d'ajout d'un post
export const addPosts = (data) => {
    return (dispatch) => {
        return axios 
            .post("http://localhost:3000/posts", data)
            .then((res) => {
                dispatch({
                    type: ADD_POSTS,
                    payload : data
                })
            })
            .catch((err) => console.log(err))
    }
}

// action d'edition d'un post 
export const editPost = (data) => {
    return (dispatch) => {
        return axios ({
            method : "put",
            url : `http://localhost:3000/posts/${data.id}`,
            data : { ...data }
        }).then((res) => {
            dispatch({
                type : EDIT_POST,
                payload : { ...data }
            })
        }).catch((err) => console.log(err))
    }
}

// action de suppression d'un post 
export const deletePost = (postId) => {
    return (dispatch) => {
        return axios ({
            method : "delete",
            url : `http://localhost:3000/posts/${postId}`
        }).then((res) => {
            dispatch({
                type : DELETE_POST,
                payload: { postId }
            })
        }).catch((err) => console.log(err));
    }
}

//likes
export const addLike = (data) => {
    return (dispatch) => {
        return axios ({
            method : "put",
            url : `http://localhost:3000/posts/${data.id}`,
            data : { ...data }
        }).then((res) => {
            dispatch({
                type: ADD_LIKE,
                payload: { ...data }
            })
        }).catch((err) => console.log(err))
    }
}

