import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const CustomerTickets = ({ ticketsPromise,inProgress,setInProgress }) => {
    const tickets = use(ticketsPromise)
    console.log(tickets);
    return (
        <div className='flex max-w-7xl mx-auto'>
            <div className='max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-3'>
                {
                    tickets.map(ticket => <Ticket inProgress={inProgress} setInProgress={setInProgress} ticket={ticket}></Ticket>)
                }
            </div>
            <div className='grid grid-cols-1/2 ml-5 text-center'>
                <div className=''>
                    <div className='bg-white mb-3 rounded-2xl ml-8'>
                        <p className='text-xl font-bold text-gray-800 py-2'>Title</p>
                        <button className='px-25 rounded-2xl py-1 bg-[#02A53B] text-white text-lg font-medium mb-2 mx-2'>Complete</button>
                    </div>
                    <div className='mx-10'>
                        <p className='text-xl font-bold text-white mb-2'>Resolved Task</p>
                        <p className='bg-sky-200 rounded-2xl text-lg font-medium text-gray-700'>No resolved tasks yet.</p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default CustomerTickets;
