import {createContext, useContext, useMemo, useState} from 'react';
import {DATA_CHARACTERS} from "../data/data";

const HeroContext = createContext();

export function HeroDataProvider(props){
    const [heroes] = useState(DATA_CHARACTERS);

    const api = useMemo(() => ({
        heroes
    }), [
        heroes
    ]);

    return <HeroContext.Provider value={api}>
        {props.children}
    </HeroContext.Provider>
}

export const useHeroDataContext = () => useContext(HeroContext);