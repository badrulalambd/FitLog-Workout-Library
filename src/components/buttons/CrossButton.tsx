'use client'

import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Bounce, toast } from 'react-toastify';

interface IMarkDoneProp {
    workout: IWorkoutType;
}

const CrossButton = ({ workout }: IMarkDoneProp) => {

    const contextValue = useContext(UserContext);
    const { addedWorkoutPlan, setAddedWorkoutPlan, planCount, setPlanCount, durationCount, setDurationCount, caloriesCount, setCaloriesCount, } = contextValue;


    const handleRemovePlan = () => {

        const newAddedPlan = addedWorkoutPlan.filter((plan) => plan.id !== workout.id)

        setAddedWorkoutPlan(newAddedPlan);
        setPlanCount(planCount - 1);
        setDurationCount(durationCount - workout.duration);
        setCaloriesCount(caloriesCount - workout.caloriesBurned);

        toast.success('Removed from todays plan', {
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
            {/* <Link
                href="/"
                className="inline-flex items-center rounded-full bg-transparent p-3 text-gray-200 transition-colors duration-200 hover:bg-[#0F1115] hover:text-white"
            >
            </Link> */}

            <button
                onClick={handleRemovePlan}
                className="inline-flex items-center rounded-full bg-transparent p-3 text-gray-200 transition-colors duration-200 hover:bg-[#0F1115] hover:text-white"
            >
                <RxCross2 className="text-xl" />
            </button>

        </div>
    );
};

export default CrossButton;