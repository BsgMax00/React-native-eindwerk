import {FlatList, StyleSheet} from "react-native";
import {ItemTile} from "../components/ItemTile";
import {useItemDataProvider} from "../context/ItemContext";

export function ItemsPage(){
    const{equipments} = useItemDataProvider()

    return<FlatList
        style={styles.body}
        data={equipments}
        keyExtractor={equipment => equipment.id}
        renderItem={({item}) => <ItemTile equipment={item}/>}
    />
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#cac492",
    }
})