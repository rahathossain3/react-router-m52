import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    // const params = useParams();  //1
    const { friendId } = useParams();

    // 2 , 6
    const [friend, setFriend] = useState({});

    // 2.1
    useEffect(() => {
        //3
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        // 4
        fetch(url)
            .then(res => res.json())
            // 5    
            .then(data => setFriend(data))
    }, [])



    return (
        <div>
            <h2>This is Detail about Dosto: {friendId} </h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h6>Website: {friend.website}</h6>
            <p><small>City: {friend.address?.city}</small></p>
            <p><small>Lat: {friend.address?.geo?.lat}</small></p>
        </div>
    );
};

export default FriendDetail;