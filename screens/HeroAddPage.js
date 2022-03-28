import {View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView} from "react-native";
import {useHeroDataContext} from "../context/HeroContext";
import {useNavigation} from "@react-navigation/native";

export function HeroAddPage(){
    const {newHero, setNewHero} = useHeroDataContext();
    const {addHero} = useHeroDataContext();

    const navigation = useNavigation();
    const _ = require("lodash")

    return (
        <ScrollView style={styles.body}>
            <View style={styles.textSeperator}>
                <Text style={styles.normalText}>Name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setNewHero({...newHero, name: newText})}/>
            </View>
            <View style={styles.textSeperator}>
                <Text style={styles.normalText}>Troop:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setNewHero({...newHero, troop: newText})}/>
            </View>
            <View style={styles.textSeperator}>
                <Text style={styles.normalText}>Weakness:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setNewHero({...newHero, weakness: newText})}/>
            </View>
            <View style={styles.textSeperator}>
                <Text style={styles.normalText}>Restrain</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setNewHero({...newHero, restrain: newText})}/>
            </View>
            <View style={styles.textSeperator}>
                <Text style={styles.normalText}>Movement Speed:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={"number-pad"}
                    onChangeText={newText => setNewHero({...newHero, movementSpeed: newText})}/>
            </View>
            <View style={styles.textSeperator}>
                <Text style={styles.normalText}>Attack Range:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={"number-pad"}
                    onChangeText={newText => setNewHero({...newHero, attackRange: newText})}/>
            </View>
            <View style={styles.textSeperator}>
                <Text style={styles.normalText}>Description:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setNewHero({...newHero, description: newText})}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {setNewHero({...newHero, id: _.uniqueId()}), addHero(newHero), navigation.goBack()}}>
                <Text style={styles.buttonText}> add new hero</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#cac492"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#ffffff"
    },
    normalText: {
        textAlign: "center",
        fontSize: 16
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 5,
        paddingVertical: 17,
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: "#cac484"
    },
    textSeperator: {
        marginVertical: 10
    },
    buttonText: {
        textAlign: "center",
        fontSize: 16
    }
})