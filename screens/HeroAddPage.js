import {SafeAreaView, TextInput, StyleSheet} from "react-native";

export function HeroAddPage(){
    return (
        <SafeAreaView>
            <TextInput
            style={styles.input}/>

            <TextInput
                style={styles.input}/>

            <TextInput
                style={styles.input}/>

            <TextInput
                style={styles.input}/>

            <TextInput
                style={styles.input}/>

            <TextInput
                style={styles.input}/>

            <TextInput
                style={styles.input}/>

            <TextInput
                style={styles.input}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})