'use client'
import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

interface SaveForLaterProp {
    workout: IWorkoutType;
}

const SaveForLater = ({ workout }: SaveForLaterProp) => {

    const contextValue = useContext(UserContext);
    const { savedPlan, setSavedPlan, savedCount, setSavedCount, savedDurationCount, setSavedDurationCount, savedCaloriesCount, setSavedCaloriesCount, } = contextValue;

    const handleSaveForLater = () => {
        const checkExist = savedPlan.some((work: IWorkoutType) => String(work.id) === String(workout.id))
        if (checkExist) {
            toast.warn('Already in your saved list', {
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
        } else {
            setSavedPlan([...savedPlan, workout]);
            setSavedCount(savedCount + 1);
            setSavedDurationCount(savedDurationCount + workout.duration);
            setSavedCaloriesCount(savedCaloriesCount + workout.caloriesBurned);

            toast.success('Saved for later', {
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
                onClick={handleSaveForLater}
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#1A1D23] hover:text-white">
                <FaRegBookmark className="text-lg" />
                Save for later
            </button>
        </div>
    );
};

export default SaveForLater;