import {HomeScreen} from "./screens/HomeScreen";
import {HeroPage} from "./screens/HeroPage";
import {ItemsPage} from "./screens/ItemsPage";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import {NAV_HEROES, NAV_HOME, NAV_ITEMS} from "./navigation_constants";

function ProvidedApp(){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
        initialRouteName={NAV_HOME}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if(rn === NAV_HOME) {iconName = focused ? 'home' : 'home-outline';}
                else if(rn === NAV_HEROES) {iconName = focused ? 'list' : 'list-outline';}
                else if(rn === NAV_ITEMS) {iconName = focused ? 'settings' : 'settings-outline';}

                return <Ionicons name={iconName} size={size} color={color}/>
            },
        })}>
            <Tab.Screen name={NAV_HOME} component={HomeScreen}/>
            <Tab.Screen name={NAV_HEROES} component={HeroPage}/>
            <Tab.Screen name={NAV_ITEMS} component={ItemsPage}/>
        </Tab.Navigator>
    )
}

export default function App(){
    return (
        <NavigationContainer>
            <ProvidedApp/>
        </NavigationContainer>
    );
}

const headerStyle = ({
    title: 'my home',
    headerStyle: {
        backgroundColor: '#4F2D1E'
    },
    backgroundColor: '#FFCAC4'
})