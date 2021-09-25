import axios from "axios";

export const GET_USERS = "GET_USERS";
export const ADD_LIKE_USER = "ADD_LIKE_USER";

const getUsers = () => {
    return (dispatch) => {
        return axios 
            .get("http://localhost:3000/users")
            .then((res) => {
                dispatch({
                    type: GET_USERS,
                    payload: res.data
                })
            })
            .catch((err) => console.log(err))
    }
}
export default getUsers;

//likes users
export const addLikeUser = (data) => {
    return (dispatch) => {
        axios({
            method : "put",
            url : `http://localhost:3000/posts/${data.id}`,
            data : { ...data },
        })
        .then((res) => {
            dispatch({
                type: ADD_LIKE_USER,
                payload: { ...data }
            });
        })
        .catch((err) => console.log(err))
    }
}