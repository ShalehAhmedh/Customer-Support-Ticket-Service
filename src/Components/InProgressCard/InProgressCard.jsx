import React from 'react';

const InProgressCard = ({ticket}) => {
    console.log(ticket)
    return (
        <div className=''>
            <div className='bg-white rounded-2xl ml-8'>
                <p className='text-xl font-bold text-gray-800 py-2'>{ticket.title}</p>
                <button className='px-25 rounded-2xl py-1 bg-[#02A53B] text-white text-lg font-medium mb-2 mx-2'>Complete</button>
            </div>
            
        </div>
    );
};

export default InProgressCard;