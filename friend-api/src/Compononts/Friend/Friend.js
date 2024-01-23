import React from 'react';

const Friend = (props) => {
    const { name, email} = props.Friend;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email : {email}</p>
        </div>
    );
};

export default Friend;