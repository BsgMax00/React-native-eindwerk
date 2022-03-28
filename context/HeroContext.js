import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {DATA_CHARACTERS} from "../data/data";

const HeroContext = createContext();

const _ = require("lodash")

export function HeroDataProvider(props){
    const [heroes, setHeroes] = useState(DATA_CHARACTERS);
    const [newHero, setNewHero] = useState({id: _.uniqueID,name: "no info", troop: "no info", weakness: "no info", restrain: "no info", recruitment: "no info", url: "https://static.wikia.nocookie.net/mini-warriors/images/a/a6/Cannon.png/revision/latest/scale-to-width-down/310?cb=20141007022925", movementSpeed: 0, attackRange: 0, description: "no info"});
    const [count, setCount] = useState(0);

    const addHero = useCallback(
        (hero) => {
            const newHeroes = [...heroes, hero]
            setHeroes(newHeroes);
        },
        [heroes, setHeroes]
    )

    useEffect(() => {
        setCount(heroes.length)
    },[heroes])

    const api = useMemo(() => ({
        heroes,
        newHero,
        setNewHero,
        addHero,
        count
    }), [
        heroes,
        newHero,
        setNewHero,
        addHero,
        count
    ]);

    return <HeroContext.Provider value={api}>
        {props.children}
    </HeroContext.Provider>
}

export const useHeroDataContext = () => useContext(HeroContext);