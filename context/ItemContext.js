import {createContext, useContext, useMemo, useState} from 'react';
import {DATA_ITEMS} from "../data/data";

const ItemContext = createContext();

export function ItemDataProvider(props){
    const [equipments] = useState(DATA_ITEMS);

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