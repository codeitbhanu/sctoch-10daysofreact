import React from "react";

function Card({ index, name, location, car }) {
    return (
        <div>
            <div key={index}>
                <h3>{name}</h3>
                <p>{location}</p>
                <p>{car}</p>
            </div>
        </div>
    );
}

export default Card;
