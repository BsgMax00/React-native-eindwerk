import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {NAV_ITEMS_DETAIL} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";

export function ItemTile({equipment}){
    const navigation = useNavigation();

    return <TouchableOpacity onPress={() => navigation.navigate(NAV_ITEMS_DETAIL, {equipment})}>
        <View style={styles.tile}>
            <View>
                <Text style={styles.text}>{equipment.name}</Text>
                <Text style={styles.text}>{equipment.damage}</Text>
            </View>
            <View>
                <Image source={{uri: equipment.url}} style={styles.image}/>
            </View>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    tile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 15,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    text: {
        alignContent: "flex-start",
        fontSize: 16,
        paddingHorizontal: 75
    },
    image: {
        alignContent: "flex-end",
        width: 50,
        height: 50
    }
})