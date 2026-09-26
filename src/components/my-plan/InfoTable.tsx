'use client'

import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';

const InfoTable = () => {

    const contextValue = useContext(UserContext);
    const {tableExercises, tableMinutes, tableCalories} = contextValue;

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#1A1D23]">
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="px-8 pt-6 pb-3 text-base font-semibold text-gray-400">
                            Exercises
                        </th>

                        <th className="px-8 pt-6 pb-3 border-l border-dotted border-gray-600 text-base font-semibold text-gray-400">
                            Minutes
                        </th>

                        <th className="px-8 pt-6 pb-3 border-l border-dotted border-gray-600 text-base font-semibold text-gray-400">
                            Calories
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="px-8 pb-6 text-4xl font-bold text-[#ccff00]">
                            {tableExercises}
                        </td>

                        <td className="px-8 pb-6 border-l border-dotted border-gray-600 text-4xl font-bold text-gray-200">
                            {tableMinutes}
                        </td>

                        <td className="px-8 pb-6 border-l border-dotted border-gray-600 text-4xl font-bold text-gray-200">
                            {tableCalories}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InfoTable;