'use client'

import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Bounce, toast } from 'react-toastify';

interface IMarkDoneProp {
    workout: IWorkoutType;
}

const SavedCrossButton = ({ workout }: IMarkDoneProp) => {

    const contextValue = useContext(UserContext);
    const { savedPlan, setSavedPlan, savedCount, setSavedCount, savedDurationCount, setSavedDurationCount, savedCaloriesCount, setSavedCaloriesCount, } = contextValue;


    const handleRemovePlan = () => {

        const newSavededPlan = savedPlan.filter((plan) => plan.id !== workout.id)

        setSavedPlan(newSavededPlan);
        setSavedCount(savedCount - 1);
        setSavedDurationCount(savedDurationCount - workout.duration);
        setSavedCaloriesCount(savedCaloriesCount - workout.caloriesBurned);

        toast.success('Removed from saved', {
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
                onClick={handleRemovePlan}
                className="inline-flex items-center rounded-full bg-transparent p-3 text-gray-200 transition-colors duration-200 hover:bg-[#0F1115] hover:text-white"
            >
                <RxCross2 className="text-xl" />
            </button>

        </div>
    );
};

export default SavedCrossButton;