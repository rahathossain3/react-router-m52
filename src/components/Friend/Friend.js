import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;
    // use for dynamic route
    let navigate = useNavigate();
    //onclick function 
    const showFriendDetail = () => {
        const path = `/friend/${id}`
        navigate(path);
    }


    return (
        <div>
            <h2>Name : {name}</h2>
            <button onClick={showFriendDetail}>{username} id: {id}</button>
        </div>
    );
};

export default Friend;