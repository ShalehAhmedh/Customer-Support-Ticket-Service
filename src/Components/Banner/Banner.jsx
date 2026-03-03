import React from 'react';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">

                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
                    <h2 className="text-2xl">In-Progress</h2>
                    <span className="text-5xl font-bold mt-2">0</span>
                </div>

                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-linear-to-r from-[#54CF68] to-[#00827A]">
                    <h2 className="text-2xl">Resolved</h2>
                    <span className="text-5xl font-bold mt-2">0</span>
                </div>

            </div>
        </div>
    );
};

export default Banner;