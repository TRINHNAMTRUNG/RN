import { View, StyleSheet, SafeAreaView, Text, TextInput } from "react-native"
import { CheckBox } from "react-native-elements";


const SettingPage = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styleSettingPage.containerSettingPage}>
                <View style={styleSettingPage.wrap}>
                    <Text style={styleSettingPage.title}>PASWORD GENERATOR</Text>
                    <Text style={styleSettingPage.textPass}> PASWORD GENERATOR</Text>
                    <View style={styleSettingPage.wrapInfo}>
                        <View style={styleSettingPage.input}>
                            {/* <Text style={styleSettingPage.title}>PASWORD GENERATOR</Text>/ */}
                            <CheckBox
                                center
                                checkedIcon='A'
                                uncheckedIcon='circle-o'
                            />
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>

    )
}
const styleSettingPage = StyleSheet.create({
    containerSettingPage: {
        flex: 1,
        backgroundColor: "#6464AB",
        padding: 16,
        paddingTop: 30
    },
    wrap: {
        flex: 1,
        backgroundColor: "#23235b",
        borderRadius: 15,
        padding: 16,
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        color: "white",
        textAlign: "center"
    },
    textPass: {
        backgroundColor: "white",
        width: "90%",
        paddingVertical: 30,
        backgroundColor: "#151537",
        paddingHorizontal: 20,
        color: "white",
        borderRadius: 5,
        marginVertical: 20
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})
export default SettingPage;