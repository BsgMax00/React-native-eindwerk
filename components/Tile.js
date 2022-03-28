import {StyleSheet, View, Text, TouchableOpacity} from "react-native"
import {NAV_HERO_DETAIL, NAV_ITEMS_DETAIL} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";

const navigation = useNavigation()


export function HeroTile(props) {
    const {data} = props;
    return <TouchableOpacity onPress={() => navigation.navigate(NAV_HERO_DETAIL)}>
            <View style={styles.tile}>
                <Text style={styles.text}>{data.name}</Text>
                <Text style={styles.text}>{data.troop}</Text>
            </View>
        </TouchableOpacity>
}

export function ItemTile({data}){
    return <TouchableOpacity onPress={() => navigation.navigate(NAV_ITEMS_DETAIL)}>
                <View style={styles.tile}>
                    <Text style={styles.text}>{data.name}</Text>
                    <Text style={styles.text}>{data.damage}</Text>
                </View>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    tile: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        margin: 15,
        borderStyle: "solid",
        borderWidth: 1
    },
    text: {
        fontSize: 16
    },
    image: {
        width: 10,
        height: 10
    }
})