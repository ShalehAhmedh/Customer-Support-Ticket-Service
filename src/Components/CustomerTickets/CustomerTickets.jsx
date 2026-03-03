import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const CustomerTickets = ({ ticketsPromise }) => {
    const tickets = use(ticketsPromise)
    console.log(tickets);
    return (
        <div className='max-w-7xl mx-auto p-12'>
            <div className='grid grid-cols-1'>
                <div className='bg-amber-500'>
                    <p>Task Status</p>
                    <p>Select a ticket to add to Task Status</p>
                </div>
                <div className='bg-amber-500'>
                    <p>Resolved Task</p>
                    <p>No resolved tasks yet.</p>
                </div>
            </div>
            <div className='max-w-4/5 grid grid-cols-2 gap-3'>
                {
                    tickets.map(ticket => <Ticket ticket={ticket}></Ticket>)
                }
            </div>
        </div>
    )
};

export default CustomerTickets;
