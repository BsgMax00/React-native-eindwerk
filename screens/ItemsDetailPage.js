import {StyleSheet, Text, View, Image, ScrollView} from "react-native";

export function ItemsDetailPage({route}){
    const {equipment} = route.params;

    return <ScrollView style={styles.body}>
        <View>
            <View style={styles.Top}>
                <View>
                    <View  style={styles.textTop}>
                        <Text style={styles.textNormal}>name: </Text>
                        <Text style={styles.textNormal}>{equipment.name}</Text>
                    </View>
                    <View style={styles.textTop}>
                        <Text style={styles.textNormal}>Hitpoints: </Text>
                        <Text style={styles.textNormal}>{equipment.hitpoints === -1 ? "unlimited" : equipment.hitpoints}</Text>
                    </View>
                </View>
                <View>
                    <Image source={{uri: equipment.url}} style={styles.image}/>
                </View>
            </View>
            <View>
                <View style={styles.subjectSeperator}>
                    <Text style={styles.textNormalHeader}>Damage: </Text>
                    <Text style={styles.textNormal}>{equipment.damage}</Text>
                </View>
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#cac492",
    },
    Top:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 15,
        borderStyle: "solid",
        borderBottomWidth: 1
    },
    textTop: {
        alignContent: "flex-start",
        fontSize: 15,
        paddingHorizontal: 55,
        flexDirection: "row"
    },
    textTopLeft: {
        textAlign: "left"
    },
    textTopRight: {
        textAlign: "right"
    },
    textNormal:{
        textAlign: "center",
        fontSize: 15,
    },
    textNormalHeader:{
        textAlign: "center",
        fontSize: 19
    },
    subjectSeperator:{
        marginVertical: 5
    },
    image: {
        alignContent: "flex-end",
        width: 100,
        height: 100
    }
})