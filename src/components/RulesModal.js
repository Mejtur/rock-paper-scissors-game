import React from 'react'
import Close from '../images/icon-close.svg';
import RulesImg from '../images/image-rules.svg';

function RulesModal({isModalOpen,setIsModalOpen}) {
    return (
        <div className={isModalOpen ? "rulesModal" : "rulesModal hide"}>
            <div className="rulesModal__container">
            <div className="rulesModal__title">
                <p>RULES</p>
                <img src={Close} alt="closeModal" onClick={()=>{setIsModalOpen(false)}}/>
            </div>
            <img src={RulesImg} alt="image" className="rulesModal__image"/>
            </div>
        </div>
    )
}

export default RulesModal
