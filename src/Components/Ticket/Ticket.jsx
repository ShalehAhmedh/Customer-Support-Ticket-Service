import React, { useState } from 'react';
import { toast } from 'react-toastify';
import calendar from './calender.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Profile = () => <FontAwesomeIcon icon="user" />;
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Ticket = ({ ticket, inProgress, setInProgress, selectedTicket, setSelectedTicket }) => {
    const [isSelected, setIsSelected] = useState(false)
    // console.log(ticket.priority)
    return (
        <button disabled={isSelected} onClick={() => {
                    toast("Selected a Ticket!!");
                    setIsSelected(true);
                    setInProgress(inProgress + 1);
                    setSelectedTicket([...selectedTicket, ticket])
                }}>
            <div className='hover:shadow-gray-500 cursor-pointer bg-white p-5 rounded-2xl shadow-2xl'>
                <div className='flex justify-between gap-20'><p className='text-xl font-semibold text-gray-800'>{ticket.title}</p><p  className={`btn rounded-2xl shadow-none border-0 ${isSelected ? "bg-[#F8F3B9] text-[#9C7700]" : "bg-green-300 text-green-800"} px-3 py-1 items-center ml-2`}>{isSelected ? "In Progress" : "Open"}</p></div>
                <div><p className='text-gray-800'>{ticket.description}</p></div>
                <div className='flex justify-between mt-3'>
                    <div className='text-[#627382] mr-2'>#{ticket.id}<span className={`ml-1 text-md font-medium ${ticket.priority == 'High' ? "text-red-600" : "text-[#FEBB0C]"}`}>{ticket.priority}</span></div>
                    <div className='text-sm text-gray-700'>{ticket.customer}<span className='ml-2 text-sm text-gray-700'><FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />{ticket.createdAt}</span></div>
                </div>
            </div>
        </button>
            
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