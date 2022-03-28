import {createContext, useContext, useMemo, useState} from 'react';
import {DATAITEMS} from "../data/data";

const ItemContext = createContext();

export function ItemDataProvider(props){
    const [equipments] = useState(DATAITEMS);

    const api = useMemo(() => ({
        equipments
    }), [
        equipments
    ]);

    return <ItemContext.Provider value={api}>
        {props.children}
    </ItemContext.Provider>
}

export const useItemDataProvider = () => useContext(ItemContext);