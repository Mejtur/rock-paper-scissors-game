import React from 'react'
import {useHistory} from 'react-router-dom';

function Choice({name,image}) {

    const history = useHistory();
    const handleClick = () => {
        history.push("game");
    }

    const choice=`choice ${name}`;
    return (
        <div className={choice}>
            <img src={image} alt="image" onClick={handleClick}/>
        </div>
    )
}

export default Choice
