import React from 'react'
import food from "./images/food.png"

export default function Food(props) {

    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    return (
        
        <img className="snake-food" style={style} src={food} />
       
    )
}
