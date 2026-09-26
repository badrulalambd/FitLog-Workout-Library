import Link from 'next/link';
import React from 'react';

const EmptyPlanBox = () => {
    return (
        <div className='bg-[#1A1D23] p-10 md:p-15 rounded-2xl text-center'>
            <h2 className='text-center text-2xl md:text-3xl lg:text-3xl uppercase text-gray-200'>Nothing here yet</h2>
            <p className="text-[18px] lg:text-[20px] font-semibold text-gray-400 mt-3 text-center">Browse the library and add a lift to get today moving.</p>

            <Link href='/'>
                <button className="mt-5 md:mt-8 cursor-pointer rounded-xl bg-[#C4F002] px-6 py-3 text-lg font-bold text-[#1A1D23] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4ff32] hover:shadow-lg hover:shadow-[#C4F002]/20">
                    Go to workouts
                </button>
            </Link>
        </div>
    );
};

export default EmptyPlanBox;