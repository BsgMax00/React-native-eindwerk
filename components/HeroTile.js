import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native"

export function HeroTile({data}) {
    return <TouchableOpacity onPress={() => console.log(data)}>
            <View style={styles.tile}>
                <Text style={styles.text}>{data.name}</Text>
                <Text style={styles.text}>{data.troop}</Text>
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