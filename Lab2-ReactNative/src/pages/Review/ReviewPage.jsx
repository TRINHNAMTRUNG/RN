import { View, StyleSheet, SafeAreaView, Image, Text, TextInput, TouchableOpacity } from "react-native"
import usb from "../../assets/usb.png"
import star from "../../assets/star.png"
import camera from "../../assets/camera.png"

const ReviewPage = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styleReviewPage.containerReviewPage}>
                <View style={styleReviewPage.frameProd}>
                    <Image source={require = usb} />
                    <Text style={styleReviewPage.nameProd}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
                </View>
                <View style={styleReviewPage.frameCmt}>
                    <Text style={styleReviewPage.text}>Cực kì hài lòng</Text>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                        <Image source={require = star} style={styleReviewPage.starImg} />
                        <Image source={require = star} style={styleReviewPage.starImg} />
                        <Image source={require = star} style={styleReviewPage.starImg} />
                        <Image source={require = star} style={styleReviewPage.starImg} />
                        <Image source={require = star} style={styleReviewPage.starImg} />
                    </View>
                    <View style={styleReviewPage.inputImage}>
                        <Image source={require = camera} />
                        <Text style={[styleReviewPage.text, { marginLeft: 20 }]}>Thêm hình ảnh</Text>
                    </View>
                    <View style={styleReviewPage.boxCmt}>
                        <TextInput multiline={true} placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm" style={{ fontSize: 18, fontWeight: "700" }} />
                    </View>
                    <TouchableOpacity style={styleReviewPage.btnSend}>
                        <Text style={[styleReviewPage.text, { color: "white" }]}>Gửi</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>

    )
}
const styleReviewPage = StyleSheet.create({
    containerReviewPage: {
        flex: 1,
        paddingTop: 30,
    },
    frameProd: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    nameProd: {
        flex: 1,
        fontSize: 20,
        fontWeight: "700",
    },
    starImg: {
        marginRight: 10,
        height: 30,
        width: 30
    },
    frameCmt: {
        alignItems: "center"
    },
    inputImage: {
        flexDirection: "row",
        width: "90%",
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "blue",
        borderWidth: 1,
        marginTop: 20
    },
    text: {
        fontSize: 20,
        fontWeight: "700",
    },
    boxCmt: {
        width: "90%",
        height: 250,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: "#c4c4c4",
        borderWidth: 1,
    },
    btnSend: {
        width: "90%",
        height: 60,
        backgroundColor: "#0D5DB6",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        borderRadius: 10,
    }
})
export default ReviewPage;