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
                <div className='bg-amber-300 p-3 rounded-2xl'>
                    <div><p>{ticket.ticket.title}</p><p>{ticket.ticket.status}</p></div>
                    <div><p>{ticket.ticket.description}</p></div>
                    <div>
                        <div>{ticket.ticket.id}<span className='ml-1'>{ticket.ticket.priority}</span></div>
                        <div>{ticket.ticket.customer}<span className='ml-1'>{ticket.ticket.createdAt}</span></div>
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