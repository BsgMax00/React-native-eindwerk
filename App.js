import {HomeScreen} from "./screens/HomeScreen";
import {HeroPage} from "./screens/HeroPage";
import {ItemsPage} from "./screens/ItemsPage";
import {HeroDetailPage} from "./screens/HeroDetailPage";
import {ItemsDetailPage} from "./screens/ItemsDetailPage";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {StyleSheet} from "react-native";
import {NAV_HEROES, NAV_HOME, NAV_ITEMS, NAV_HERO_DETAIL, NAV_ITEMS_DETAIL} from "./navigation_constants";

import {DataProvider} from "./context/DataContext";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

function ProvidedApp(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={NAV_HOME} component={HomeScreen} options={{title: "Homepage", headerStyle: styles.header, headerTitleAlign: "center"}}/>
            <Stack.Screen name={NAV_HEROES} component={HeroPage} options={{title: "Characters", headerStyle: styles.header, headerTitleAlign: "center"}}/>
            <Stack.Screen name={NAV_HERO_DETAIL} component={HeroDetailPage} options={{title: "Hero Detail", headerStyle: styles.header, headerTitleAlign: "center"}}/>
            <Stack.Screen name={NAV_ITEMS} component={ItemsPage} options={{title: "Items", headerStyle: styles.header, headerTitleAlign: "center"}}/>
            <Stack.Screen name={NAV_ITEMS_DETAIL} component={ItemsDetailPage} options={{title: "Item Detail", headerStyle: styles.header, headerTitleAlign: "center"}}/>
        </Stack.Navigator>
    )
}

export default function App() {
    return (
            <NavigationContainer>
                <SafeAreaProvider>
                    <DataProvider>
                        <ProvidedApp/>
                    </DataProvider>
                </SafeAreaProvider>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#4f2d1e",
    }
})