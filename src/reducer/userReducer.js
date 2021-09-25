import { ADD_LIKE_USER, GET_USERS } from "../actions/user.action"

const initialState = {};

const userReducer= (state = initialState, action) => {
    switch(action.type){
        case GET_USERS:
            return action.payload

        case ADD_LIKE_USER:
            return state.map((user) => {
                if(user.id === action.payload.id){
                    return {
                        ...user,
                        likes: action.payload.likes,
                    }
                }else{
                    return user;
                }
            })

        default:
            return state;
    }
}
export default userReducer;