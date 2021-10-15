import React from 'react';

const User = (props) => {
    return (
        <div>
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    )
}

export default User;