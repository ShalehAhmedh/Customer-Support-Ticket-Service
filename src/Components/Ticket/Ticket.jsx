import React from 'react';

const Ticket = (ticket) => {
    console.log(ticket);
    return (

        //      "id": 1002,
        // "title": "Payment Failed",
        // "description": "Payment deducted but order not confirmed.",
        // "customer": "Karim Ahmed",
        // "priority": "Critical",
        // "status": "In_Progress",
        // "createdAt": "2026-03-01T11:30:00Z"

        <div className=''>
            <div>
                <div className='bg-white p-5 rounded-2xl shadow-2xl'>
                    <div className='flex justify-between'><p className='text-xl font-semibold text-gray-800'>{ticket.ticket.title}</p><p className='bg-green-300 rounded-2xl text-green-800 px-3 py-1 items-center'>{ticket.ticket.status}</p></div>
                    <div><p className='text-gray-800'>{ticket.ticket.description}</p></div>
                    <div className='flex justify-between'>
                        <div className='text-[#627382]'>{ticket.ticket.id}<span className='ml-1 text-md font-medium text-red-600'>{ticket.ticket.priority}</span></div>
                        <div className='text-sm text-gray-700'>{ticket.ticket.customer}<span className='ml-1 text-sm text-gray-700'>{ticket.ticket.createdAt}</span></div>
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