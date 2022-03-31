import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
            {/* 2 way a link dynamic */}
            {/* <Link to={'/friend/' + id}>Show detail</Link> */}
            <Link to={`/friend/${id}`}>Show detail</Link>
            <button onClick={showFriendDetail}>{username} id: {id}</button>
        </div>
    );
};

export default Friend;