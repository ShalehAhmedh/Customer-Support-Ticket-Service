import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';
import InProgressCard from '../InProgressCard/InProgressCard';

const CustomerTickets = ({ ticketsPromise, inProgress, setInProgress, selectedTicket, setSelectedTicket }) => {
    const tickets = use(ticketsPromise)
    // console.log(selectedTicket);
    return (
        <div className='flex max-w-7xl mx-auto'>
            <div className='max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-3'>
                {
                    tickets.map(ticket => <Ticket selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} inProgress={inProgress} setInProgress={setInProgress} ticket={ticket}></Ticket>)
                }
            </div>
            <div className='grid grid-cols-1/2 ml-5 text-center'>
                {
                    selectedTicket.map(ticket => <InProgressCard ticket={ticket}></InProgressCard>)
                }
                <div className='mx-10'>
                    <p className='text-xl font-bold text-white mb-2'>Resolved Task</p>
                    <p className='bg-sky-200 rounded-2xl text-lg font-medium text-gray-700'>No resolved tasks yet.</p>
                </div>

            </div>
        </div>
    )
};

export default CustomerTickets;
