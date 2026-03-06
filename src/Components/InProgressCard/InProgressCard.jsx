import React from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';

const InProgressCard = ({ticket,resolvedCount,setResolvedCount,inProgress,setInProgress,removedInProgress}) => {
    // console.log(resolvedCount);
    // const [isVisible, setIsVisible] = React.useState(true);
    const [isSelected, setIsSelected]=useState(false);
    const handleRemove=()=>{
        removedInProgress(ticket);
    }
    return (
        <div className=''>
            <div className='shadow-2xl bg-white rounded-2xl ml-8'>
                <p className='text-xl font-bold text-gray-800 py-2 px-25'>{ticket.title}</p>
                <button onClick={() => {
                    toast("Ticket Resolved!!");
                    handleRemove();
                    setIsSelected(true);
                    setResolvedCount(resolvedCount + 1);
                    setInProgress(inProgress-1);
                }
            } className='cursor-pointer px-22 rounded-2xl py-1 bg-[#02A53B] text-white text-lg font-medium mb-4 mx-2'>Complete</button>
            </div>

        </div>
    );
};

export default InProgressCard;