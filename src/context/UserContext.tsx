'use client'

import React, { createContext, ReactNode, useState } from 'react';

interface IShareData {
    addedWorkoutPlan: IWorkoutType[],
    setAddedWorkoutPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>,

    savedPlan: IWorkoutType[],
    setSavedPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>,

    planCount: number,
    setPlanCount: React.Dispatch<React.SetStateAction<number>>,
    durationCount: number,
    setDurationCount: React.Dispatch<React.SetStateAction<number>>,
    caloriesCount: number,
    setCaloriesCount: React.Dispatch<React.SetStateAction<number>>,

    savedCount: number,
    setSavedCount: React.Dispatch<React.SetStateAction<number>>,

    savedDurationCount: number,
    setSavedDurationCount: React.Dispatch<React.SetStateAction<number>>,
    savedCaloriesCount: number,
    setSavedCaloriesCount: React.Dispatch<React.SetStateAction<number>>,

    tableExercises: number,
    setTableExercises: React.Dispatch<React.SetStateAction<number>>,
    tableMinutes: number,
    setTableMinutes: React.Dispatch<React.SetStateAction<number>>,
    tableCalories: number,
    setTableCalories: React.Dispatch<React.SetStateAction<number>>,

}

export const UserContext = createContext<IShareData>({
    addedWorkoutPlan: [],
    setAddedWorkoutPlan: () => { },
    savedPlan: [],
    setSavedPlan: () => { },

    planCount: 0,
    setPlanCount: () => { },
    durationCount: 0,
    setDurationCount: () => { },
    caloriesCount: 0,
    setCaloriesCount: () => { },

    savedCount: 0,
    setSavedCount: () => { },
    savedDurationCount: 0,
    setSavedDurationCount: () => { },
    savedCaloriesCount: 0,
    setSavedCaloriesCount: () => { },

    tableExercises: 0,
    setTableExercises: () => { },
    tableMinutes: 0,
    setTableMinutes: () => { },
    tableCalories: 0,
    setTableCalories: () => { },
});

const UserContextProvider = ({ children }: { children: ReactNode }) => {

    const [addedWorkoutPlan, setAddedWorkoutPlan] = useState<IWorkoutType[]>([]);
    const [savedPlan, setSavedPlan] = useState<IWorkoutType[]>([]);

    const [planCount, setPlanCount] = useState<number>(0);
    const [durationCount, setDurationCount] = useState<number>(0);
    const [caloriesCount, setCaloriesCount] = useState<number>(0);

    const [savedCount, setSavedCount] = useState<number>(0);
    const [savedDurationCount, setSavedDurationCount] = useState<number>(0);
    const [savedCaloriesCount, setSavedCaloriesCount] = useState<number>(0);

    const [tableExercises, setTableExercises] = useState<number>(0);
    const [tableMinutes, setTableMinutes] = useState<number>(0);
    const [tableCalories, setTableCalories] = useState<number>(0);

    const shareData = {
        addedWorkoutPlan,
        setAddedWorkoutPlan,
        planCount,
        setPlanCount,
        durationCount,
        setDurationCount,
        caloriesCount,
        setCaloriesCount,

        savedPlan,
        setSavedPlan,
        savedCount,
        setSavedCount,
        savedDurationCount,
        setSavedDurationCount,
        savedCaloriesCount,
        setSavedCaloriesCount,

        tableExercises,
        setTableExercises,
        tableMinutes,
        setTableMinutes,
        tableCalories,
        setTableCalories,
    }

    return (
        <UserContext.Provider value={shareData}>{children}</UserContext.Provider>
    );
};

export default UserContextProvider;