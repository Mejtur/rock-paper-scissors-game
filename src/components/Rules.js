import React from 'react'

function Rules({setIsModalOpen}) {
    return (
        <div className="rules">
                <button className="rules__btn" onClick={()=>{setIsModalOpen(true)}}>
                    RULES
                </button>
            </div>
    )
}

export default Rules
