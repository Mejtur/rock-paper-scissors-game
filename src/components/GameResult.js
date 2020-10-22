import React, {useEffect, useState} from 'react'
import Choice from './Choice';
import Paper from '../images/icon-paper.svg';
import Rock from '../images/icon-rock.svg';
import Scissors from '../images/icon-scissors.svg';
import { useDispatch, useSelector } from 'react-redux';
import {setComputer} from '../features/computerChoice';
import {selectPlayerName,selectPlayerImage} from '../features/playerChoice';
import PlayAgain from './PlayAgain';
import Empty from './Empty';

function GameResult() {

    const [text,setText] = useState("");
    const [showPlayAgain,setShowPlayAgain] = useState(false);
    const variables = [{name:"paper",image:Paper},
    {name:"rock",image:Rock},
    {name:"scissors",image:Scissors}
]

const playerName = useSelector(selectPlayerName);
const playerImage = useSelector(selectPlayerImage);

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
        if(playerName==="paper"){
            if(variables[randomNumber].name==="paper"){
                setText("Draw")
            }else if(variables[randomNumber].name==="rock"){
                setText("You Win")
            }else if(variables[randomNumber].name==="scissors"){
                setText("You Lose")
            }
        }else if(playerName==="rock"){
            if(variables[randomNumber].name==="paper"){
                setText("You Lose")
            }else if(variables[randomNumber].name==="rock"){
                setText("Draw")
            }else if(variables[randomNumber].name==="scissors"){
                setText("You Win")
            }
        }else if(playerName==="scissors"){
            if(variables[randomNumber].name==="paper"){
                setText("You Win")
            }else if(variables[randomNumber].name==="rock"){
                setText("You Lose")
            }else if(variables[randomNumber].name==="scissors"){
                setText("Draw")
            }
        }else{
            setText("Something went wrong")
        }

    },[randomNumber])

    setTimeout(()=>setShowPlayAgain(true),1000);

    return (
        <div className="gameResult">
            <div className="gameResult__result">
                <p className="gameResult__title">YOU PICKED</p>
                <Choice name={playerName} image={playerImage}/>
            </div>
            <div className="gameResult__result">
                <p className="gameResult__title">
                THE HOUSE PICKED
                </p>
                {showPlayAgain ? 
                <Choice name={variables[randomNumber].name} image={variables[randomNumber].image}/>
                    :
                    <Empty />
            }
            </div>
            {showPlayAgain? <PlayAgain text={text} />: ""}
        </div>
    )
}

export default GameResult
