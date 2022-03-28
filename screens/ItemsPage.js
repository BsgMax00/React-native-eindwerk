import {StyleSheet, ScrollView} from "react-native";
import {ItemTile} from "../components/Tile";
import {useDataContext} from "../context/DataContext";

export function ItemsPage(){
    const{items} = useDataContext()

    return(
        <ScrollView style={styles.body}>
            {items.map(item => (
                <ItemTile data={item} key={item.id}/>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#cac492",
    }
})