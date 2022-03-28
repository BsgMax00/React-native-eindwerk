import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native"
import {NAV_HERO_DETAIL} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";

export function HeroTile({hero}) {
    const navigation = useNavigation();

    return <TouchableOpacity onPress={() => {navigation.navigate(NAV_HERO_DETAIL, {hero}), console.log(hero)}}>
            <View style={styles.tile}>
                <View>
                    <Text style={styles.text}>{hero.name}</Text>
                    <Text style={styles.text}>{hero.troop}</Text>
                </View>
                <View>
                    <Image source={{uri: hero.url}} style={styles.image}/>
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