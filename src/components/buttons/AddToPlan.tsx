'use client'
import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';
import { LuCalendarPlus } from 'react-icons/lu';
import { Bounce, toast } from 'react-toastify';

interface ITodaysPlanProp {
    workout: IWorkoutType;
}

const AddToTodaysPlan = ({ workout }: ITodaysPlanProp) => {

    const contextValue = useContext(UserContext);
    const { addedWorkoutPlan, setAddedWorkoutPlan, planCount, setPlanCount, durationCount, setDurationCount, caloriesCount, setCaloriesCount,} = contextValue;


    const handleAddToPlan = () => {
        const checkExist = addedWorkoutPlan.some((work: IWorkoutType) => work.id === workout.id)
        if (checkExist) {
            toast.warn('Already Added', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        }else{
            setAddedWorkoutPlan([...addedWorkoutPlan, workout]);
            setPlanCount(planCount+1);
            setDurationCount(durationCount+workout.duration);
            setCaloriesCount(caloriesCount+workout.caloriesBurned);

            console.log("planCount Data After Added: ", planCount)
            console.log("addedWorkoutPlan Data After Added: ", addedWorkoutPlan)

            toast.success('Successfully added to todays plan!', {
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
    }

    return (
        <div>
            <button
                onClick={handleAddToPlan}
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-6 py-3.5 text-base font-bold text-[#1A1D23] shadow-md shadow-[#ccff00]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8ff4d] hover:shadow-lg hover:shadow-[#ccff00]/20">
                <LuCalendarPlus className="text-xl" />
                Add to today&apos;s plan
            </button>
        </div>
    );
};

export default AddToTodaysPlan;