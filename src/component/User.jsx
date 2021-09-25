import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from './Utils';

const User = () => {
    
    const users = useSelector(state => state.userReducer);

    return (
        <div 
            className="card w-25 float-end position-fixed" 
            style={{right: "30px", height:"250px", top:"50px"}}
        >

            <h1 className="h4 text-center">
                {!isEmpty(users[0]) && users[0].pseudo}
            </h1>

            <strong className="text-center">
                Like{!isEmpty(users[0]) && users[0].likes > 1 ? "s" : null} : {" "}
                {!isEmpty(users[0]) && users[0].likes}
            </strong>
        </div>
    )
}

export default User
