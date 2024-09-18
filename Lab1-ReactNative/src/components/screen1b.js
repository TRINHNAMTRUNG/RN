
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { memo } from 'react';
import { LinearGradient } from "expo-linear-gradient";
const Screen1b = () => {
    return (
        <View style={styleFirstScreen.containerFS}>
            <View style={styleFirstScreen.wrapHeader}>
                <Image source={require("../../assets/img/image2.png")} style={styleFirstScreen.imageHeader} />
            </View>
            <View style={styleFirstScreen.wrapBody}>
                <Text style={styleFirstScreen.textBody}>FORGET PASSWORD</Text>
                <Text style={[styleFirstScreen.textBody, styleFirstScreen.textBodySub]}>
                    Provide your account’s email for which you want to reset your password
                </Text>
            </View>
            <LinearGradient colors={['#ccf4f7', '#00ccf9']} style={styleFirstScreen.wrapFooter}>
                <View style={styleFirstScreen.wrapButton}>
                    <TouchableOpacity style={styleFirstScreen.button}>
                        <Text style={styleFirstScreen.txtButton}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleFirstScreen.button}>
                        <textIn style={styleFirstScreen.txtButton}>SIGN UP</textIn>
                    </TouchableOpacity>
                </View>
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
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
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
        alignItems: "center",
    },
    button: {
        height: 50,
        width: "90%",
        backgroundColor: "#e3c000",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    textFooter: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "700",
        marginTop: 30
    },
    txtButton: {
        fontSize: 20,
        fontWeight: "700"
    }
})
export default memo(Screen1b);