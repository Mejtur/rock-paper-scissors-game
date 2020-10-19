import React, { useState } from 'react';
import Start from './Start';
import RulesModal from './RulesModal';
import Score from './Score';
import Rules from './Rules';

function StartGame() {
    const [isModalOpen,setIsModalOpen] = useState(false);
    return (
        <div className="board">
            <Score />
            <Start />
            <Rules setIsModalOpen={setIsModalOpen}/>
            <RulesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
    )
}

export default StartGame
