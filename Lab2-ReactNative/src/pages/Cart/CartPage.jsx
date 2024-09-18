
import { ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, View, Text, TextInput, ScrollView } from "react-native"
import bookImage from "../../assets/book.png"
import { Dimensions } from 'react-native';
import { useEffect, useState } from "react";

const { height } = Dimensions.get('window');
const CartPage = () => {
    const defaultPrice = 141800;
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(defaultPrice);

    useEffect(() => {
        setPrice(quantity * defaultPrice);
    }, [quantity]);
    const handleSpinnerPlus = () => {
        if (quantity > 0) {
            setQuantity(quantity + 1);
        }
    }
    const handleSpinnerMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0, // Không có chữ số sau dấu phẩy
        maximumFractionDigits: 0
    });
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView style={styleCartPage.containerCartPage}>

                <View style={styleCartPage.frameInfoProd}>

                    <View style={styleCartPage.wrapInfoProd}>
                        <ImageBackground source={require = bookImage} style={styleCartPage.bookImage} />
                        <View style={styleCartPage.wrapDetail}>
                            <View style={styleCartPage.detail}>
                                <Text style={styleCartPage.text}>Nguyên hàm tích phân và ứng dụng </Text>
                                <Text style={styleCartPage.text}>Cung cấp bởi Tiki Trading</Text>
                                <Text style={[styleCartPage.text, styleCartPage.price]}>{formatter.format(price)}</Text>
                                <Text style={[styleCartPage.text, styleCartPage.oriPrice]}>{formatter.format(price)}</Text>
                            </View>
                            <View style={styleCartPage.frameSpinner}>
                                <View style={styleCartPage.spinner}>
                                    <TouchableOpacity style={styleCartPage.btnSpinner} onPress={() => handleSpinnerMinus()}>
                                        <Text style={styleCartPage.text}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={[styleCartPage.text, styleCartPage.num]}>{quantity}</Text>
                                    <TouchableOpacity style={styleCartPage.btnSpinner} onPress={() => handleSpinnerPlus()}>
                                        <Text style={styleCartPage.text}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={[styleCartPage.buy, styleCartPage.text]}>Mua Sau</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styleCartPage.frameCodeDisc}>
                        <View style={styleCartPage.wrapInputCode}>
                            <View style={{ width: 40, height: "50%", backgroundColor: "#F2DD1B" }}></View>
                            <TextInput style={styleCartPage.inputCode} placeholder="MÃ GIẢM GIÁ" />
                        </View>
                        <TouchableOpacity style={styleCartPage.btnSubmit}>
                            <Text style={[styleCartPage.text, styleCartPage.textSubmit]}>
                                Áp dụng
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styleCartPage.frameFeeProd}>
                    <View style={styleCartPage.coupon}>
                        <Text style={styleCartPage.text}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox? </Text>
                        <Text style={[styleCartPage.text, { marginLeft: 10, color: "#134FEC" }]}>Nhập tại đây? </Text>
                    </View>
                    <View style={styleCartPage.wrapOrderPrice}>
                        <View style={styleCartPage.orderPrice}>
                            <Text style={[styleCartPage.title, { fontSize: 18, fontWeight: "700" }]}>Tạm tính</Text>
                            <Text style={[styleCartPage.price, { fontSize: 18, fontWeight: "700" }]}>{formatter.format(price)} </Text>
                        </View>
                        <View style={styleCartPage.orderPrice}>
                            <Text style={[styleCartPage.title, { fontSize: 18, fontWeight: "700" }]} >Thành tiền</Text>
                            <Text style={[styleCartPage.price, { fontSize: 18, fontWeight: "700" }]}>{formatter.format(price)} </Text>

                        </View>

                    </View>
                    <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#E53935", paddingVertical: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }} >TIẾN HÀNH ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styleCartPage = StyleSheet.create({
    containerCartPage: {
        backgroundColor: "#c4c4c4",
    },
    frameInfoProd: {
        height: height * 0.5,
        paddingTop: 30,
        backgroundColor: "white"
    },
    wrapInfoProd: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    detail: {
        flex: 1,
        backgroundColor: "white"
    },
    frameFeeProd: {
        height: height * 0.45,
        marginTop: 20,
    },
    bookImage: {
        width: 127,
        height: "100%",
        marginRight: 20
    },

    //Spinner
    btnSpinner: {
        height: 25,
        width: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c4c4c4",
    },
    frameSpinner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    spinner: {
        flexDirection: "row",
        alignItems: "center"
    },
    num: {
        marginHorizontal: 15
    },
    buy: {
        color: "#134FEC",
    },
    //text
    text: {
        fontSize: 12,
        fontWeight: "700",
        flexWrap: "wrap",
        flexShrink: 1
    },
    price: {
        fontSize: 18,
        color: "#EE0D0D",
        marginVertical: 10,
    },
    oriPrice: {
        fontSize: 12,
        color: "#808080",
        textDecorationLine: "line-through"
    },

    // code
    frameCodeDisc: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    wrapInputCode: {
        height: "30%",
        flex: 1,
        marginRight: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        borderColor: "gray",
        borderRadius: 3,
        borderWidth: 1
    },
    inputCode: {
        flex: 1,
        borderColor: "gray",
        borderRadius: 3,
        borderWidth: 1,
        marginLeft: 10,
        paddingHorizontal: 5,
        fontWeight: "700"
    },
    btnSubmit: {
        flex: 1,
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "gray",
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: "#0A5EB7"
    },
    textSubmit: {
        fontSize: 20,
        color: "white"
    },
    //coupon

    coupon: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 20,
        backgroundColor: "white",
        padding: 16,
        marginBottom: 20
    },
    wrapOrderPrice: {
        flex: 1,
        justifyContent: "space-between"
    },
    orderPrice: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        padding: 16,
    }
})

export default CartPage;