import React, {useEffect, useState} from 'react'
import Choice from './Choice';
import Paper from '../images/icon-paper.svg';
import Rock from '../images/icon-rock.svg';
import Scissors from '../images/icon-scissors.svg';
import { useDispatch, useSelector } from 'react-redux';
import {setComputer, selectPlayerChoice, setPlayer} from '../features/gameStart';

function GameResult() {

    
    const variables = [{name:"paper",image:Paper},
    {name:"rock",image:Rock},
    {name:"scissors",image:Scissors}
]

    
const randomNumber = Math.floor(Math.random()*3);
const dispatch = useDispatch(
    setComputer({
        computerName:variables[randomNumber].name,
        computerImage:variables[randomNumber].image,
    })
    )
    
    useEffect(() => {
        dispatch(setComputer({
            computerName:variables[randomNumber].name,
            computerImage:variables[randomNumber].image,
        }))
        
    },[])
    
    
    // const playerChoice = useSelector(selectPlayerChoice);
    console.log(useSelector(selectPlayerChoice));
    return (
        <div className="gameResult">
            <div className="gameResult__result">
                <p className="gameResult__title">YOU PICKED</p>
                {/* <Choice name={playerChoice.playerName} image={playerChoice.playerImage}/> */}
            </div>
            <div className="gameResult__result">
                <p className="gameResult__title">
                THE HOUSE PICKED
                </p>
                <Choice name={variables[randomNumber].name} image={variables[randomNumber].image}/>
            </div>
        </div>
    )
}

export default GameResult
