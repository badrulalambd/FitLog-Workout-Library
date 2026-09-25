'use client'
import { FaRegBookmark } from 'react-icons/fa';

const SaveForLater = () => {

    const handleSaveForLater = () => {

    }

    return (
        <div>
            <button 
            onClick={handleSaveForLater}
            className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#1A1D23] hover:text-white">
                <FaRegBookmark className="text-lg" />
                Save for later
            </button>
        </div>
    );
};

export default SaveForLater;