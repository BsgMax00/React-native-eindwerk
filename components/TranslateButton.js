import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export function TranslateButton({title}){
    return (
        <View>
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 70,
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