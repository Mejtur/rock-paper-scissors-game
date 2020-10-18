import React from 'react'
import Choice from './Choice';
import Paper from '../images/icon-paper.svg';
import Rock from '../images/icon-rock.svg';
import Scissors from '../images/icon-scissors.svg';

function Start() {
    return (
        <div className="start">
            <div className="start__container">
            <div className="start__col">
                <Choice name="paper" image={Paper}/>
                <Choice name="scissors" image={Scissors}/>
            </div>
            <div className="start__colCenter">
                <Choice name="rock" image={Rock}/>
            </div>
            </div>
        </div>
    )
}

export default Start
