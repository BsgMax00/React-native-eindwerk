import {StyleSheet, SafeAreaView, Image, Text} from "react-native";

export function HomeScreen(){
    return (
        <SafeAreaView style={styles.body}>
            <Image source={require ("../assets/image/MiniWarriorsCover.jpg")} style={styles.image}/>
            <Text style={styles.text}>Dear Players of Mini Warriors:</Text>
            <Text style={styles.text}>We are glad to present you with the Early Access version of Mini Warriors II updated to the current Mini Warriors games. This upgrade is exclusive for the Mini Warriors players.</Text>
            <Text style={styles.text}>Enjoy tons of new content and features:</Text>
            <Text style={styles.text}>- A completely new game: Mini Warriors 2, not a DLC</Text>
            <Text style={styles.text}>- Completely new 3D battlefield, with 360 degrees panoramic view</Text>
            <Text style={styles.text}>- Over 60 New heroes and fantastic new skills</Text>
            <Text style={styles.text}>- An amazing continent newly-built 10 times larger to conquer</Text>
            <Text style={styles.text}>- Rule your floating island and build the castle of your own</Text>
            <Text style={styles.text}>- Vertical and horizontal views can be switched at any time</Text>
            <Text style={styles.text}>- Single hand operation in vertical mode available</Text>
            <Text style={styles.text}>- Huge amounts of AFK bonus granted, just keep it easy and enjoy</Text>
            <Text style={styles.text}>- And hundreds of new features waiting for you to explore</Text>
            <Text style={styles.text}>- An amazing continent newly-built 10 times larger to conquer</Text>
            <Text style={styles.text}>With recruiting powerful heroes and leading invincible armies.</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: null,
        height: 200,
        padding: 5
    },
    text: {
        textAlign: "center"
    },
    body: {
        backgroundColor: "#cac492",
    }
})