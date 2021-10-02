import React from 'react'
import "./card.css"
function Card(props) {
    return (
        <div className="card-container">
            <div className="img">
                <img src={props.image} alt={props.name} width="150" height="150"></img>
            </div>
            <div className="name">
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default Card
