import {FlatList, StyleSheet} from "react-native";
import {useDataContext} from "../context/DataContext";
import {HeroTile} from "../components/Tile";

export function HeroPage(){
    const {heroes} = useDataContext();

    return <FlatList
             style={styles.body}
             data={heroes}
             keyExtractor={hero => hero.id}
             renderItem={({item}) => <HeroTile data={item}/>}
         />
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#cac492"
    }
})