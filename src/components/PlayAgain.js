import React from 'react'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {increment,decrement} from '../features/gameScore';

function PlayAgain({text}) {

    const dispatch = useDispatch();
    let history = useHistory();

    const handleClick = () => {
        if(text==="You Win"){
            dispatch(increment());
            history.replace('/');
        }else if(text==="You Lose"){
            dispatch(decrement());
            history.replace('/');
        }else{
            history.replace('/');
        }
    }

    return (
        <div className="playAgain">
            <p className="playAgain__text">{text}</p>
            <button className="playAgain__btn" onClick={handleClick}>
                PLAY AGAIN
            </button>
        </div>
    )
}

export default PlayAgain
