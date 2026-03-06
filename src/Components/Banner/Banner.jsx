import React from 'react';

const Banner = ({inProgress,resolvedCount}) => {

    return (
        <div className="max-w-7xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">

                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
                    <h2 className="text-4xl font-bold">In-Progress</h2>
                    <span className="text-5xl font-bold mt-2">{inProgress}</span>
                </div>

                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-linear-to-r from-[#54CF68] to-[#00827A]">
                    <h2 className="text-6xl font-bold">Resolved</h2>
                    <span className="text-5xl font-bold mt-2">{resolvedCount}</span>
                </div>

            </div>
            <div className='flex justify-between mt-8 mb-4'>
                <div className='text-4xl font-bold text-gray-800'>Customer Tickets:</div>
                <div className='mr-8 md:mr-20 text-4xl font-bold text-gray-800'>Task Status:</div>
            </div>
        </div>
    );
};

export default Banner;