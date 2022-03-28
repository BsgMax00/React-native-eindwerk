import {FlatList, StyleSheet} from "react-native";
import {useHeroDataContext} from "../context/HeroContext";
import {HeroTile} from "../components/HeroTile";

export function HeroPage(){
    const {heroes} = useHeroDataContext();

    return <FlatList
             style={styles.body}
             data={heroes}
             keyExtractor={hero => hero.id}
             renderItem={({item}) => <HeroTile hero={item}/>}
         />
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#cac492"
    }
})