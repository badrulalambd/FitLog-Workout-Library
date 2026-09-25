'use client'

import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

const SavedCounter = () => {

    const contextValue = useContext(UserContext);
    const {savedCount} = contextValue;

    return (
        <div>
            <button className="btn btn-ghost shadow-none hove:shadow-none border-0 text-base font-medium text-white transition-all duration-300 hover:bg-[#1A1D23] rounded-2xl">
                Saved
                <span className="rounded-2xl border border-gray-200 px-2.5 py-1 text-sm leading-none text-gray-200">
                    {savedCount}
                </span>
            </button>
        </div>
    );
};

export default SavedCounter;