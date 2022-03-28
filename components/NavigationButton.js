import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

import {useNavigation} from "@react-navigation/native";

export function NavigationButton({navigationTarget, title}){
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(navigationTarget)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        marginHorizontal: 5,
        paddingVertical: 17,
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: "#cac484"

    },
    buttonText: {
        textAlign: "center",
        fontSize: 16
    }
})