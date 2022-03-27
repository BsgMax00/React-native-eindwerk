import React, {createContext, useContext, useMemo, useState} from 'react';
import {DATACHARACTERS, DATAITEMS} from "../data/data";

const DataContext = createContext();

export function DataProvider(props){
    const [heroes] = useState(DATACHARACTERS)
    const [items] = useState(DATAITEMS)

    const api = useMemo(() => ({
        heroes,
        items
    }), [
        heroes,
        items
    ]);

    return <DataContext.Provider value={api}>
        {props.children}
    </DataContext.Provider>
}

export const useDataContext = () => useContext(DataContext);