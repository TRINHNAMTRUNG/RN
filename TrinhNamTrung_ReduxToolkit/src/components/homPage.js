import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StyleGlobal from "./styleGlobal";
const { height, width } = Dimensions.get("window");


const HomePage = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={StyleGlobal.container}>
                <View style={StyleGlobal.wrapView}>
                    <Text style={StyleGlobal.textTitle}>A premium online store for sporter and their stylish choice</Text>
                    <View style={styleHomePage.wrapImage}>
                        <Image source={require('../assets/imageHome.png')} style={{ width: "100%", height: "100%" }} />
                    </View>
                    <Text style={[StyleGlobal.textTitle, { paddingHorizontal: 90, marginBottom: 30 }]}>POWER BIKE SHOP</Text>
                    <TouchableOpacity style={styleHomePage.buttonGet} onPress={() => navigation.navigate("ShoppingPage")}>
                        <Text style={[StyleGlobal.textTitle, { color: "white" }]}>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleHomePage.buttonGet} onPress={() => navigation.navigate("ManageBikePage")}>
                        <Text style={[StyleGlobal.textTitle, { color: "white" }]}>Manage Bike</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const styleHomePage = StyleSheet.create({


    wrapImage: {
        height: height * 0.43,
        padding: 35,
        borderRadius: 60,
        backgroundColor: "#E941411A",
        marginVertical: 30
    },
    buttonGet: {
        backgroundColor: "#E94141",
        borderRadius: 30,
        paddingVertical: 20,
        marginBottom: 10
    }
})

export default HomePage;