import {StyleSheet, View, ScrollView} from "react-native";
import {NAV_HEROES, NAV_ITEMS, NAV_HERO_ADD} from "../navigation_constants";
import {HomeScreenTextDump} from "../components/HomeScreenTextDump";
import {NavigationButton} from "../components/NavigationButton";

export function HomeScreen(){
    return (
        <ScrollView style={styles.body}>
            <View>
                <HomeScreenTextDump/>
                <View style={styles.buttonLocation}>
                    <NavigationButton navigationTarget={NAV_HEROES} title={"Characters"}/>
                    <NavigationButton navigationTarget={NAV_HERO_ADD} title={"add a Character"}/>
                    <NavigationButton navigationTarget={NAV_ITEMS} title={"Items"}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#cac492",
    },
    buttonLocation: {
        marginVertical: 25,
    }
})