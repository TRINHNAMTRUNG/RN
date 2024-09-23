import { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import { listImageProd } from "../data/dataObj";
import star from "../assets/star.png";
const { height } = Dimensions.get("window");
const DetailProdPage = ({ navigation, route }) => {
    const [curentImageProd, setCurentImageProd] = useState(listImageProd[3]);
    useEffect(() => {
        if (route.params?.selectCurentProd) {
            setCurentImageProd(route.params.selectCurentProd);
        }
    }, [route.params]);
    console.log(curentImageProd);
    return (
        <View style={styleDetailProdPage.container}>
            <ScrollView style={{ backgroundColor: "white" }}>
                <View style={styleDetailProdPage.frameImage} >
                    <Image source={curentImageProd.srcImage} style={styleDetailProdPage.image} />
                </View>
                <View style={styleDetailProdPage.frameDetail}>
                    <Text style={[styleDetailProdPage.text, { fontSize: 20 }]}>{curentImageProd.name}</Text>
                    <View style={styleDetailProdPage.wrapRating}>
                        <View style={{ flexDirection: "row", marginRight: 30 }}>
                            <Image source={star} style={{ marginRight: 10 }} />
                            <Image source={star} style={{ marginRight: 10 }} />
                            <Image source={star} style={{ marginRight: 10 }} />
                            <Image source={star} style={{ marginRight: 10 }} />
                        </View>
                        <Text style={styleDetailProdPage.text}>(Xem 828 đánh giá)</Text>
                    </View>
                    <View style={styleDetailProdPage.wrapPrice}>
                        <View style={{ flexDirection: "row", marginRight: 30, marginBottom: 15 }}>
                            <Text style={styleDetailProdPage.textprice}>{curentImageProd.price} đ</Text>
                            <Text style={styleDetailProdPage.textoriginalprice}>{curentImageProd.originalPrice} đ</Text>
                        </View>
                        <Text style={[styleDetailProdPage.text, { color: "red", fontWeight: "700" }]}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    </View>
                    <TouchableOpacity style={styleDetailProdPage.btn} onPress={() => navigation.navigate("OptionColor", { curentImageProd, listImageProd: listImageProd })} >
                        <Text>{`${listImageProd.length} MÀU-CHỌN MÀU`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleDetailProdPage.btnSubmit} >
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>CHỌN MUA</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}

const styleDetailProdPage = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: "500"
    },
    container: {
        paddingTop: 30,
        paddingHorizontal: 16,
        backgroundColor: "white"
    },
    frameImage: {
        height: height * 0.5,
        backgroundColor: "white",
        alignItems: "center"
    },
    frameDetail: {
        height: height * 0.5,
    },
    wrapRating: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        fontSize: 30
    },
    textprice: {
        fontSize: 20,
        fontWeight: "700",
        marginRight: 30,
        color: "red"
    },
    textoriginalprice: {
        fontSize: 20,
        fontWeight: "500",
        textDecorationLine: "line-through",
        color: "gray"
    },
    wrapPrice: {
        marginVertical: 15
        // backgroundColor: "orange"
    },
    btn: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
    },
    btnSubmit: {
        width: "95%",
        marginLeft: "2.5%",
        backgroundColor: "red",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        marginTop: 60,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // Shadow for Android
        elevation: 5, // Dùng cho Android
    },
    image: {
        height: "90%",
        width: 280
    }
})

export default DetailProdPage;