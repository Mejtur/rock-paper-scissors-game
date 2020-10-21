import React from 'react'

function PlayAgain({text}) {
    return (
        <div className="playAgain">
            <p className="playAgain__text">{text}</p>
            <button className="playAgain__btn">
                PLAY AGAIN
            </button>
        </div>
    )
}

export default PlayAgain
