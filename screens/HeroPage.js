import {ScrollView} from "react-native";
import {useDataContext} from "../context/DataContext";
import {HeroTile} from "../components/HeroTile";

export function HeroPage(){
    const {heroes} = useDataContext();

    return(
        <ScrollView>
            {heroes.map(hero => (
                <HeroTile data={hero} key={hero.id}/>
            ))}
        </ScrollView>
    )
}