'use client'

import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

interface IMarkDoneProp {
    workout: IWorkoutType;
}

const MarkAsDoneButton = ({workout} : IMarkDoneProp) => {

    const contextValue = useContext(UserContext);
    const { addedWorkoutPlan, setAddedWorkoutPlan, planCount, setPlanCount, durationCount, setDurationCount, caloriesCount, setCaloriesCount, } = contextValue;


    const handleMarkAsDone = () => {

        const newAddedPlan = addedWorkoutPlan.filter((plan) => plan.id !== workout.id)

        setAddedWorkoutPlan(newAddedPlan);
            setPlanCount(planCount - 1);
            setDurationCount(durationCount - workout.duration);
            setCaloriesCount(caloriesCount - workout.caloriesBurned);

            toast.success('Workout loggged - nice work', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
    }

    return (
        <div>
            <button
                onClick={handleMarkAsDone}
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-4xl bg-[#ccff00] px-6 py-3.5 text-base font-bold text-[#1A1D23] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8ff4d]">
                <FaCheck />
                Mark as Done
            </button>
        </div>
    );
};

export default MarkAsDoneButton;