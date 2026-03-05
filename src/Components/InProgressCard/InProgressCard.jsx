import React from 'react';
import { useState } from 'react'

const InProgressCard = ({ticket,resolvedCount,setResolvedCount,inProgress,setInProgress,removedInProgress}) => {
    // console.log(resolvedCount);
    // const [isVisible, setIsVisible] = React.useState(true);
    const [isSelected, setIsSelected]=useState(false);
    const handleRemove=()=>{
        removedInProgress(ticket);
    }
    return (
        <div className=''>
            <div className='bg-white rounded-2xl ml-8'>
                <p className='text-xl font-bold text-gray-800 py-2'>{ticket.title}</p>
                <button onClick={() => {
                    handleRemove();
                    setIsSelected(true);
                    setResolvedCount(resolvedCount + 1);
                    setInProgress(inProgress-1);
                }
            } className='btn px-25 rounded-2xl py-1 bg-[#02A53B] text-white text-lg font-medium mb-2 mx-2'>Complete</button>
            </div>

        </div>
    );
};

export default InProgressCard;