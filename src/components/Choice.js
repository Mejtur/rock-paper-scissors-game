import React from 'react'

function Choice({name,image}) {
    const choice=`choice ${name}`;
    return (
        <div className={choice}>
            <img src={image} alt="image"/>
        </div>
    )
}

export default Choice
