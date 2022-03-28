import {StyleSheet, Text, View, Image, ScrollView} from "react-native";

export function HeroDetailPage({route}){
    const {hero} = route.params;

    return <ScrollView style={styles.body}>
                <View>
                    <View style={styles.Top}>
                        <View>
                            <View  style={styles.textTop}>
                                <Text style={styles.textNormal}>name: </Text>
                                <Text style={styles.textNormal}>{hero.name}</Text>
                            </View>
                            <View style={styles.textTop}>
                                <Text style={styles.textNormal}>troop: </Text>
                                <Text style={styles.textNormal}>{hero.troop}</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={{uri: hero.url}} style={styles.image}/>
                        </View>
                    </View>
                    <View>
                        <View style={styles.subjectSeperator}>
                            <Text style={styles.textNormalHeader}>Weakness: </Text>
                            <Text style={styles.textNormal}>{hero.weakness}</Text>
                        </View>
                        <View style={styles.subjectSeperator}>
                            <Text style={styles.textNormalHeader}>Restrain: </Text>
                            <Text style={styles.textNormal}>{hero.restrain}</Text>
                        </View>
                        <View style={styles.subjectSeperator}>
                            <Text style={styles.textNormalHeader}>Recruitment: </Text>
                            <Text style={styles.textNormal}>{hero.recruitment}</Text>
                        </View>
                        <View style={styles.subjectSeperator}>
                            <Text style={styles.textNormalHeader}>Movement Speed: </Text>
                            <Text style={styles.textNormal}>{hero.movementSpeed}</Text>
                        </View>
                        <View style={styles.subjectSeperator}>
                            <Text style={styles.textNormalHeader}>Attack Range: </Text>
                            <Text style={styles.textNormal}>{hero.attackRange}</Text>
                        </View>
                        <View style={styles.subjectSeperator}>
                            <Text style={styles.textNormalHeader}>Description: </Text>
                            <Text style={styles.textNormal}>{hero.description}</Text>
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