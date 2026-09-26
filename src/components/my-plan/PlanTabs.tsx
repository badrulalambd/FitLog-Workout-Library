"use client";

import { UserContext } from "@/context/UserContext";
import { useContext, useEffect, useState } from "react";
import PlanListCard from "../workout-library/PlanListCard";
import EmptyPlanBox from "./EmptyPlanBox";
import SavedPlanCard from "../workout-library/SavedPlanCard";

type TabType = "today" | "saved";

const PlanTabs = () => {
    const [activeTab, setActiveTab] = useState<TabType>("today");

    const contextValue = useContext(UserContext);
    const { addedWorkoutPlan, savedPlan, planCount, durationCount, caloriesCount, savedCount, savedDurationCount, savedCaloriesCount, setTableExercises, setTableMinutes, setTableCalories } = contextValue;

    // Update InfoTable whenever the active tab or its data changes
    useEffect(() => {
        if (activeTab === "today") {
            setTableExercises(planCount);
            setTableMinutes(durationCount);
            setTableCalories(caloriesCount);
        } else {
            setTableExercises(savedCount);
            setTableMinutes(savedDurationCount);
            setTableCalories(savedCaloriesCount);
        }
    }, [
        activeTab,
        planCount,
        durationCount,
        caloriesCount,
        savedCount,
        savedDurationCount,
        savedCaloriesCount,
        setTableExercises,
        setTableMinutes,
        setTableCalories,
    ]);

    const handleTab = (tb: TabType) => {
        setActiveTab(tb)
    }

    return (
        <section className="flex flex-col gap-10">

            {/* Tabs + Filter  */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Tabs */}
                <div className="flex w-fit rounded-xl bg-[#1A1D23] p-1">
                    <button
                        // onClick={() => setActiveTab("today")}
                        onClick={() => handleTab("today")}
                        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${activeTab === "today"
                            ? "bg-[#0F1115] text-[#ccff00] shadow-sm"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        // onClick={() => setActiveTab("saved")}
                        onClick={() => handleTab("saved")}
                        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${activeTab === "saved"
                            ? "bg-[#0F1115] text-[#ccff00] shadow-sm"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Saved
                    </button>
                </div>

                {/* Filter */}
                <div className="w-full sm:w-auto">
                    <h3 className="text-lg font-semibold">Sort By</h3>
                    <select
                        className="w-full cursor-pointer rounded-xl border border-gray-700 bg-[#0F1115] px-4 py-2.5 text-sm font-medium text-gray-300 outline-none transition-all duration-300 hover:border-[#ccff00] focus:border-[#ccff00] sm:min-w-45"
                        defaultValue="all"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {/* Tab Content */}
            <div className="bg-[#0F1115]">
                {activeTab === "today" ? (
                    addedWorkoutPlan.length > 0 ?
                        <div className="grid grid-cols-1 gap-4">
                            {
                                addedWorkoutPlan.map((workout) => <PlanListCard
                                    key={workout.id}
                                    workout={workout}
                                />)
                            }
                        </div>
                        :
                        <EmptyPlanBox />
                ) : (
                    savedPlan.length > 0 ?
                        <div className="grid grid-cols-1 gap-4">
                            {
                                savedPlan.map((workout) => <SavedPlanCard
                                    key={workout.id}
                                    workout={workout}
                                />)
                            }
                        </div>
                        :
                        <EmptyPlanBox />
                )}
            </div>
        </section>
    );
};

export default PlanTabs;