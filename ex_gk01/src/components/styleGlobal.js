import { StyleSheet } from "react-native";


const StyleGlobal = StyleSheet.create({
    textTitle: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center"
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    wrapView: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        paddingHorizontal: 16
    },
    wrapViewSpaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})

export default StyleGlobal;