import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import StyleGlobal from "./styleGlobal";

const { height, width } = Dimensions.get("window");

const DetailBikePage = ({ navigate, route }) => {
    const { bikeInfo } = route.params;
    return (
        <SafeAreaProvider>
            <SafeAreaView style={StyleGlobal.container}>
                <View style={styleDetailBikePage.wrapView}>
                    <View style={styleDetailBikePage.wrapImage}>
                        <Image source={{ uri: bikeInfo.image }} style={styleDetailBikePage.image} />
                    </View>
                    <Text style={[StyleGlobal.textTitle, { textAlign: "none", marginBottom: 10, fontSize: 25 }]}>{bikeInfo.name}</Text>
                    <Text style={[StyleGlobal.textTitle, { textAlign: "none", marginBottom: 10 }]}>Price: $ {bikeInfo.price}</Text>
                    <Text style={[StyleGlobal.textTitle, { textAlign: "none", marginBottom: 10 }]}>Description</Text>
                    <Text style={[StyleGlobal.textTitle, { color: "#6E6E6E", fontSize: 18 }]}>{bikeInfo.description}</Text>
                    <TouchableOpacity style={styleDetailBikePage.btnAddCard}>
                        <Text style={[StyleGlobal.textTitle, { color: "white" }]}>Add to card</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styleDetailBikePage = StyleSheet.create({
    wrapView: {
        padding: 16
    },
    wrapImage: {
        height: height * 0.43,
        padding: 25,
        backgroundColor: "#FDEDED",
        borderRadius: 15,
        marginBottom: 30,
        elevation: 5
    },
    image: {
        width: "100%",
        height: "100%"
    },
    btnAddCard: {
        backgroundColor: "#E94141",
        paddingVertical: 20,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 50
    }
});

export default DetailBikePage;