
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo } from 'react';
import { LinearGradient } from "expo-linear-gradient";
const Screen1a = () => {
    return (
        <View style={styleFirstScreen.containerFS}>
            <View style={styleFirstScreen.wrapHeader}>
                <Image source={require("../../assets/img/image1.png")} style={styleFirstScreen.imageHeader} />
            </View>
            <View style={styleFirstScreen.wrapBody}>
                <Text style={styleFirstScreen.textBody}>GROW YOUR BUSINESS</Text>
                <Text style={[styleFirstScreen.textBody, styleFirstScreen.textBodySub]}>
                    We will help you to grow your business using online server
                </Text>
            </View>
            <LinearGradient colors={['#ccf4f7', '#00ccf9']} style={styleFirstScreen.wrapFooter}>
                <View style={styleFirstScreen.wrapButton}>
                    <TouchableOpacity style={styleFirstScreen.button}>
                        <Text style={styleFirstScreen.txtButton}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleFirstScreen.button}>
                        <Text style={styleFirstScreen.txtButton}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <Text style={[styleFirstScreen.textFooter]}>
                    HOW WE WORK
                </Text>
            </LinearGradient>

        </View>
    )
}
const styleFirstScreen = StyleSheet.create({
    containerFS: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ccf4f7"
    },
    imageHeader: {
        height: 150,
        width: 150
    },
    wrapHeader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    wrapBody: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    textBody: {
        width: 149,
        flexWrap: "wrap",
        textAlign: "center",
        marginTop: 50,
        fontSize: 25,
        fontWeight: "700"
    },
    textBodySub: {
        width: "100%",
        fontSize: 15
    },
    wrapFooter: {
        width: "100%",
        paddingBottom: 80
    },
    wrapButton: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#e3c000",
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        alignContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },
    textFooter: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "700",
        marginTop: 30
    },
    txtButton: {
        fontWeight: "700"
    }
})
export default memo(Screen1a);