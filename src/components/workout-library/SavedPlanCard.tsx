import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { LuFlame } from "react-icons/lu";
import SavedCrossButton from "../buttons/SavedCrossButton";

interface PlanListProp {
    workout: IWorkoutType;
}

const SavedPlanCard = ({ workout }: PlanListProp) => {
    return (

        <div className="rounded-2xl bg-[#1A1D23]">
            <div className="flex flex-col md:flex-row gap-5 p-4 sm:p-5 justify-between">

                <div className="flex flex-col md:flex-row gap-5">
                    {/* Image */}
                     <div className="relative w-full shrink-0 overflow-hidden rounded-xl md:h-30 md:w-52">
                        <Image
                            src={workout.image}
                            height={250}
                            width={400}
                            alt="Workout Image"
                            className="h-52 w-full rounded-xl object-cover md:h-full"
                        />
                    </div>

                    {/* Workout Information */}
                    <div className="flex flex-col py-2">
                        <h2 className="uppercase text-1xl md:text-2xl lg:text-3xl font-semibold leading-tight text-white sm:text-3xl">
                            {workout.name}
                        </h2>

                        <span className="text-lg font-medium text-gray-400 sm:text-xl">
                            {workout.equipment}
                        </span>

                        {/* Workout Attributes */}
                        <div className="flex gap-5 mt-2">

                            {/* Duration */}
                            <div className="flex items-center gap-1 font-medium text-gray-300 text-lg">
                                <FaRegClock className="shrink-0 text-[#B1DA00]" />
                                <span>{workout.duration} min</span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center gap-1 font-medium text-gray-300 text-lg">
                                <LuFlame className="shrink-0 text-[#B1DA00]" />
                                <span>{workout.caloriesBurned} kcal</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 font-medium text-gray-300 text-lg">
                                <FaRegStar className="shrink-0 text-[#B1DA00]" />
                                <span>{workout.rating}</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-row gap-2 items-center">

                    {/* View Details Button */}
                    <Link href={`/workout/${workout.id}`}>
                        <button
                            className="cursor-pointer inline-flex items-center gap-2 rounded-4xl border border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#0F1115] hover:text-white">
                            View Details
                        </button>
                    </Link>

                    {/* Cross Button  */}
                    <SavedCrossButton
                    workout={workout}
                    />

                </div>

            </div>
        </div>
    );
};

export default SavedPlanCard;