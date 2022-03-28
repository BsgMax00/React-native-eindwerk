import {View, Text, TouchableOpacity} from "react-native";

import {useNavigation} from "@react-navigation/native";

export function NavigationButton({navigationTarget}){
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(navigationTarget)}>
                <Text>tests</Text>
            </TouchableOpacity>
        </View>
    )
}