import React, { useState } from 'react';

const Ticket = ({ticket,inProgress,setInProgress}) => {
    console.log(ticket);
    const [isSelected, setIsSelected]=useState(false)
    return (
        <div className=''>
            <div>
                <div className='bg-white p-5 rounded-2xl shadow-2xl'>
                    <div className='flex justify-between gap-20'><p className='text-xl font-semibold text-gray-800'>{ticket.title}</p><button disabled={isSelected} onClick={()=>{
                        setIsSelected(true);
                        setInProgress(inProgress+1);
                    }} className='btn bg-green-300 rounded-2xl text-green-800 px-3 py-1 items-center ml-2'>{isSelected?"In Progress":"Open"}</button></div>
                    <div><p className='text-gray-800'>{ticket.description}</p></div>
                    <div className='flex justify-between'>
                        <div className='text-[#627382]'>{ticket.id}<span className='ml-1 text-md font-medium text-red-600'>{ticket.priority}</span></div>
                        <div className='text-sm text-gray-700'>{ticket.customer}<span className='ml-1 text-sm text-gray-700'>{ticket.createdAt}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;

{/* <div className='grid grid-cols-1'>
                <div className='bg-amber-500'>
                    <p>Task Status</p>
                    <p>Select a ticket to add to Task Status</p>
                </div>
                <div className='bg-amber-500'>
                    <p>Resolved Task</p>
                    <p>No resolved tasks yet.</p>
                </div>
            </div> */}