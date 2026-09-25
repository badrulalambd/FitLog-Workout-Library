'use client'

import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

const PlanCounter = () => {

    const contextValue = useContext(UserContext);
    const {planCount} = contextValue;

    return (
        <div>
            <button className="btn btn-ghost shadow-none hove:shadow-none border-0 text-base font-medium text-white transition-all duration-300 hover:bg-[#1A1D23] rounded-2xl">
                Plan
                <span className="rounded-2xl border border-gray-200 px-2.5 py-1 text-sm leading-none transition-colors duration-300 text-[#1A1D23] bg-[#ccff00]">
                    {planCount}
                </span>
            </button>
        </div>
    );
};

export default PlanCounter;