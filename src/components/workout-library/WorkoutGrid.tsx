import WorkoutLibraryCard from "@/components/workout-library/WorkoutLibraryCard";


const getWorkoutData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const WorkoutLibraryGrid = async () => {

    const workoutData = await getWorkoutData();

    return (
        <div className="bg-[#0F1115] text-gray-200">
            <div className="container mx-auto pb-20 flex flex-col gap-10">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">The Library</h2>
                    <p className="text-[18px] lg:text-[20px] font-semibold text-gray-400 mt-3">Twelve lifts covering every major muscle group.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        workoutData.map((workout: IWorkoutType) => <WorkoutLibraryCard
                            key={workout.id}
                            workout={workout}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkoutLibraryGrid;