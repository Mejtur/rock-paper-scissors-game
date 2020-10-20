import React from 'react'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setPlayer} from '../features/gameStart';

function Choice({name,image}) {

    const dispatch = useDispatch(
        setPlayer({
            playerName:name,
            playerImage:image,
        })
    )


    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setPlayer({
            playerName:name,
            playerImage:image,
        }))
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
