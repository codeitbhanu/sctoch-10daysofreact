import React from "react";

function UserInfo({ user }) {
    const twitterLink = `https://twitter.com/${user.twitterUsername}`;

    return (
        <div>
            <img src={user.avatar} alt="Chris" />
            <h3>
                <a href="" target="_blank" rel="noopener noreferrer">
                    {user.name}
                </a>
            </h3>

            <strong>Location</strong>
            <p>{user.location}</p>

            <strong>Eats</strong>
            <p>{user.foodType}</p>

            <strong>Age</strong>
            <p>{user.age}</p>

            <strong>Likes</strong>
            <p>{user.likes}</p>

            <strong>Twitter</strong>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                @{user.name}
            </a>
        </div>
    );
}

export default UserInfo;
