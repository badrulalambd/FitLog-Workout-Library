import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { LuFlame } from "react-icons/lu";

interface WorkoutProp {
    workout: IWorkoutType;
}


const WorkoutLibraryCard = ({ workout }: WorkoutProp) => {
    return (
        <Link href={`/workout/${workout.id}`}>
            <div className="group overflow-hidden rounded-2xl border border-transparent bg-[#1A1D23] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#B1DA00] hover:shadow-xl hover:shadow-[#B1DA00]/10">
                {/* Image */}
                <figure className="relative h-60 w-full overflow-hidden bg-[#14161A]">
                    <Image
                        src={workout.image}
                        width={500}
                        height={300}
                        alt={workout.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#1A1D23]/70 via-transparent to-transparent" />
                </figure>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                    {/* Muscle Group Badges */}
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center rounded-full bg-[#B1DA00] px-3.5 py-1.5 text-sm font-bold text-[#1A1D23]"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <div className="mt-5">
                        <h2 className="line-clamp-1 text-2xl font-bold tracking-tight text-gray-100 transition-colors duration-300 group-hover:text-[#B1DA00]">
                            {workout.name}
                        </h2>
                    </div>

                    {/* Equipment */}
                    <div className="mt-2.5">
                        <p className="text-base font-medium text-gray-300">
                            {workout.equipment}
                        </p>
                    </div>

                    {/* Workout Stats */}
                    <div className="mt-6 grid grid-cols-3 divide-x divide-gray-700/60 border-t border-gray-700/60 pt-5">
                        {/* Duration */}
                        <div className="flex items-center justify-center gap-2 text-base font-medium text-gray-300">
                            <FaRegClock className="text-lg text-[#B1DA00]" />
                            <span>{workout.duration}</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center justify-center gap-2 text-base font-medium text-gray-300">
                            <LuFlame className="text-lg text-[#B1DA00]" />
                            <span>{workout.caloriesBurned}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-center gap-2 text-base font-medium text-gray-300">
                            <FaRegStar className="text-lg text-[#B1DA00]" />
                            <span>{workout.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutLibraryCard;