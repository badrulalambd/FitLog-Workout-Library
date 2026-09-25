"use client";

import { useState } from "react";

type TabType = "today" | "saved";

const PlanTabs = () => {
    const [activeTab, setActiveTab] = useState<TabType>("today");

    return (
        <section className="rounded-2xl bg-[#1A1D23] p-4 sm:p-6">
            {/* Tabs + Filter */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                
                {/* Tabs */}
                <div className="flex w-fit rounded-xl bg-[#0F1115] p-1">
                    <button
                        onClick={() => setActiveTab("today")}
                        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${
                            activeTab === "today"
                                ? "bg-[#0F1115] text-[#ccff00] shadow-sm"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${
                            activeTab === "saved"
                                ? "bg-[#0F1115] text-[#ccff00] shadow-sm"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        Saved
                    </button>
                </div>

                {/* Filter */}
                <div className="w-full sm:w-auto">
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
            <div className="mt-5 rounded-xl border border-gray-800 bg-[#0F1115] p-6 sm:p-8">
                {activeTab === "today" ? (
                    <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                            Today&apos;s Workout Plan
                        </h3>
                    </div>
                ) : (
                    <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                            Saved Workouts
                        </h3>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PlanTabs;