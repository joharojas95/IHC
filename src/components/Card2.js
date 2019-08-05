import React from 'react'
import './Card2.css'

const Card2 = props => (
    <div className="Card2">
        <img src= {props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card2