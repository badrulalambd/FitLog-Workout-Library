import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { LuCalendarPlus } from "react-icons/lu";


interface WorkoutDetailPageProps {
    params: Promise<{
        workoutid: string;
    }>;
}

const getWorkoutData = async () => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
        const data = await res.json();
        return data;
    } catch (error) {
        // throw new Error("Failed to fetch data");
        console.error("Failed to fetch data", error);
        return [];
    }
}

const WorkoutDetailPage = async ({ params }: WorkoutDetailPageProps) => {

    const { workoutid } = await params;
    const workoutData = await getWorkoutData();

    const workout: IWorkoutType = workoutData.find((work: IWorkoutType) => String(work.id) === String(workoutid))

    const handleAddToPlan = () => {
        
    }

    return (
        <div className="bg-[#0F1115] mt-20 py-15">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left side  */}
                    {/* <div>
                        <figure>
                            <Image
                                src={workout.image}
                                width={1000}
                                height={1000}
                                alt="workout Img"
                            />
                        </figure>
                    </div> */}
                    {/* Left side */}
                    <div className="h-full">
                        <figure className="relative h-87.5 w-full overflow-hidden rounded-3xl bg-[#1A1D23] sm:h-112.5 md:h-full md:min-h-full">
                            <Image
                                src={workout.image}
                                alt="workout Img"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                            />

                            {/* Subtle overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#1A1D23]/30 via-transparent to-transparent" />
                        </figure>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col gap-6">
                        <div className="text-white">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-semibold">{workout.name}</h2>
                        </div>
                        <div className="text-white text-[18px] md:text-[20px]">
                            <p>{workout.description}</p>
                        </div>
                        <div className="flex gap-2">
                            {
                                workout.muscleGroups.map((muscle, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center rounded-full bg-[#B1DA00] px-3.5 py-1.5 text-sm font-bold text-[#1A1D23]"
                                    >
                                        {muscle}
                                    </span>
                                ))
                            }
                        </div>
                        {/* Table of content start */}
                        <div className="overflow-hidden rounded-2xl border border-gray-700 bg-[#1A1D23]">
                            <table className="w-full text-left">
                                <tbody>
                                    <tr className="border-b border-gray-700">
                                        <th className="w-1/2 px-5 py-4 text-lg uppercase font-semibold text-gray-300">
                                            Equipment
                                        </th>
                                        <td className="px-5 py-4 text-lg text-gray-100">
                                            {workout.equipment}
                                        </td>
                                    </tr>

                                    <tr className="border-b border-gray-700">
                                        <th className="px-5 py-4 text-lg uppercase font-semibold text-gray-300">
                                            Difficulty
                                        </th>
                                        <td className="px-5 py-4 text-lg text-gray-100">
                                            {workout.difficulty}
                                        </td>
                                    </tr>

                                    <tr className="border-b border-gray-700">
                                        <th className="px-5 py-4 text-lg uppercase font-semibold text-gray-300">
                                            Sets
                                        </th>
                                        <td className="px-5 py-4 text-lg font-semibold text-gray-300">
                                            {workout.sets}
                                        </td>
                                    </tr>

                                    <tr className="border-b border-gray-700">
                                        <th className="px-5 py-4 text-lg uppercase font-semibold text-gray-300">
                                            Reps
                                        </th>
                                        <td className="px-5 py-4 text-lg text-gray-100">
                                            {workout.reps}
                                        </td>
                                    </tr>

                                    <tr className="border-b border-gray-700">
                                        <th className="px-5 py-4 text-lg uppercase font-semibold text-gray-300">
                                            Duration
                                        </th>
                                        <td className="px-5 py-4 text-lg text-gray-100">
                                            {workout.duration}
                                        </td>
                                    </tr>

                                    <tr className="border-b border-gray-700">
                                        <th className="px-5 py-4 text-lg uppercase font-semibold text-gray-300">
                                            Calories
                                        </th>
                                        <td className="px-5 py-4 text-lg text-gray-100">
                                            {workout.caloriesBurned}
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="px-5 py-4 text-lg uppercase font-semibold text-gray-300">
                                            Rating
                                        </th>
                                        <td className="px-5 py-4 text-lg font-semibold text-gray-300">
                                            {workout.rating}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Table end */}

                        <div className="text-gray-300">
                            <h2 className="text-xl md:text-2xl lg:text-3xl uppercase font-semibold my-2">Instructions</h2>
                            {
                                workout.instructions.map((instruction, index) => (
                                    <span
                                        key={index}
                                        className="text-[18px] md:text-[20px] font-semibold leading-10"
                                    >
                                        {`${index + 1}. ${instruction}`}
                                        <br />
                                    </span>
                                ))
                            }
                        </div>

                        {/* Buttons */}
                                                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                            {/* Add to Today's Plan */}
                            <button 
                            onClick={handleAddToPlan}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-6 py-3.5 text-base font-bold text-[#1A1D23] shadow-md shadow-[#ccff00]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8ff4d] hover:shadow-lg hover:shadow-[#ccff00]/20">
                                <LuCalendarPlus className="text-xl" />
                                Add to today&apos;s plan
                            </button>

                            {/* Save for Later */}
                            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#1A1D23] hover:text-white">
                                <FaRegBookmark className="text-lg" />
                                Save for later
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailPage;