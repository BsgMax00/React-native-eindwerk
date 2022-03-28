import {StyleSheet, View, ScrollView} from "react-native";
import {NAV_HEROES, NAV_ITEMS} from "../navigation_constants";
import {HomeScreenTextDump} from "../components/HomeScreenTextDump";
import {NavigationButton} from "../components/NavigationButton";

export function HomeScreen(){
    return (
        <ScrollView style={styles.body}>
            <View>
                <HomeScreenTextDump/>
                <NavigationButton navigationTarget={NAV_HEROES}/>
                <NavigationButton navigationTarget={NAV_ITEMS}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#cac492",
    }
})