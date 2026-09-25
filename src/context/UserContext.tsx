'use client'

import React, { createContext, ReactNode, useState } from 'react';

interface IShareData {
    addedWorkoutPlan: IWorkoutType[],
    setAddedWorkoutPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>

    savedPlan: IWorkoutType[],
    setSavedPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>

    planCount: number,
    setPlanCount: React.Dispatch<React.SetStateAction<number>>

    savedCount: number,
    setSavedCount: React.Dispatch<React.SetStateAction<number>>

    durationCount: number,
    setDurationCount: React.Dispatch<React.SetStateAction<number>>

    caloriesCount: number,
    setCaloriesCount: React.Dispatch<React.SetStateAction<number>>

}

export const UserContext = createContext<IShareData>({
    addedWorkoutPlan: [],
    setAddedWorkoutPlan: () => {},
    savedPlan: [],
    setSavedPlan: () => {},

    planCount: 0,
    setPlanCount: () => {},
    savedCount: 0,
    setSavedCount: () => {},

    durationCount: 0,
    setDurationCount: () => {},

    caloriesCount: 0,
    setCaloriesCount: () => {},
});

const UserContextProvider = ({children} : {children : ReactNode}) => {

    const [addedWorkoutPlan, setAddedWorkoutPlan] = useState<IWorkoutType[]>([]);
    const [savedPlan, setSavedPlan] = useState<IWorkoutType[]>([]);

    const [planCount, setPlanCount] = useState<number>(0);
    const [savedCount, setSavedCount] = useState<number>(0);
    
    const [durationCount, setDurationCount] = useState<number>(0);
    const [caloriesCount, setCaloriesCount] = useState<number>(0);

    const shareData = {
        addedWorkoutPlan,
        setAddedWorkoutPlan,
        savedPlan,
        setSavedPlan,
        planCount,
        setPlanCount,
        savedCount,
        setSavedCount,
        durationCount,
        setDurationCount,
        caloriesCount,
        setCaloriesCount,
    }

    return (
        <UserContext.Provider value = {shareData}>{children}</UserContext.Provider>
    );
};

export default UserContextProvider;