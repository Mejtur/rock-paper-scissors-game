import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import Start from '../components/Start';
import Rules from './Rules';
import RulesModal from './RulesModal';

function Board() {
    const [isModalOpen,setIsModalOpen] = useState(false);
    return (
        <div className="board">
            <div className="board__container">
                <img src={Logo}/>
                <div className="board__scoreContainer">
                    <p className="board__title">SCORE</p>
                    <p className="board__score">12</p>
                </div>
            </div>
            <Start />
            <div className="rules">
                <button className="rules__btn" onClick={()=>{setIsModalOpen(true)}}>
                    RULES
                </button>
            </div>
            <RulesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
    )
}

export default Board
