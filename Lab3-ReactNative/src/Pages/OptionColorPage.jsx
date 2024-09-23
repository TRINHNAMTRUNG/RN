

import { useState } from "react";
import { ScrollView, View, StyleSheet, Image, Button, Text, Dimensions, TouchableOpacity } from "react-native";

const { height } = Dimensions.get("window");
const OptionColorPage = ({ navigation, route }) => {
    const { curentImageProd, listImageProd } = route.params;
    const [selectCurentProd, setSelectCurentProd] = useState(curentImageProd);
    console.log("?>>>", listImageProd);
    return (
        <View style={styleOptionColorPage.container}>
            <ScrollView >
                <View style={styleOptionColorPage.frameDetail}>
                    <Image source={selectCurentProd.srcImage} style={styleOptionColorPage.image} />
                    <View style={{ flex: 1 }}>
                        <Text style={[styleOptionColorPage.text, { fontSize: 17 }]}>{selectCurentProd.name}</Text>
                        <Text style={[styleOptionColorPage.text, { fontSize: 17 }]}>Màu sắc: {selectCurentProd.color}</Text>
                        <Text style={[styleOptionColorPage.text, { fontSize: 17 }]}>Cung cấp bởi: {selectCurentProd.supplier}</Text>
                        <Text style={[styleOptionColorPage.text, { fontSize: 17, color: "red" }]}>Giá: {selectCurentProd.price} đ</Text>
                    </View>

                </View>
                <View style={styleOptionColorPage.frameOption}>
                    <Text style={[styleOptionColorPage.text, { fontSize: 20, marginBottom: 15, flex: 0 }]}>Chọn một màu bên dưới: </Text>
                    <View style={styleOptionColorPage.wrapColor}>
                        {listImageProd && listImageProd.length !== 0 &&
                            listImageProd.map((item) => {
                                return (
                                    <TouchableOpacity
                                        key={`color-${item.id}`}
                                        style={[
                                            styleOptionColorPage.btnColor,
                                            { backgroundColor: `${item.color}`, borderWidth: item.id === selectCurentProd.id ? 3 : 0 }]}
                                        onPress={() => setSelectCurentProd(item)}
                                    >
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>
                    <TouchableOpacity style={styleOptionColorPage.btnSubmit} onPress={() => navigation.navigate("DetailProd", { selectCurentProd })}>
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>XONG</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}

const styleOptionColorPage = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: "500",
        marginLeft: 20,
        flexWrap: "wrap",
        marginTop: 10
    },
    container: {
        marginTop: 30,
        paddingHorizontal: 16,
        backgroundColor: "white"
    },
    frameOption: {
        backgroundColor: "white",
        height: height * 0.7,
    },
    frameDetail: {
        height: height * 0.3,
        flexDirection: "row",
        paddingTop: 10
    },
    image: {
        height: "96%",
        width: 169
    },
    wrapColor: {
        alignItems: "center",
        marginTop: 20
    },
    btnSubmit: {
        width: "95%",
        marginLeft: "2.5%",
        backgroundColor: "#4D6DC1",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        marginTop: 80,
        borderColor: "#F7B086",
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // Shadow for Android
        elevation: 5, // Dùng cho Android
    },
    btnColor: {
        borderRadius: 10,
        marginBottom: 15,
        height: 50,
        width: 50,
        borderColor: "#F7B086",
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // Shadow for Android
        elevation: 10, // Dùng cho Android
    }
})

export default OptionColorPage;