

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
                    <Text style={[styleOptionColorPage.text, { fontSize: 20 }]}>{selectCurentProd.name}</Text>
                </View>
                <View style={styleOptionColorPage.frameOption}>
                    <Text style={[styleOptionColorPage.text, { fontSize: 20, marginBottom: 15 }]}>Chọn một màu bên dưới: </Text>
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
        marginTop: 10,
        marginLeft: 20,
        flexWrap: "wrap",
        flex: 1
    },
    container: {
        marginTop: 30,
        paddingHorizontal: 16,
        backgroundColor: "white"
    },
    frameOption: {
        backgroundColor: "white"
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
        alignItems: "center"
    },
    btnSubmit: {
        backgroundColor: "#4D6DC1",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        marginTop: 60
    },
    btnColor: {
        borderRadius: 10,
        marginBottom: 15,
        height: 50,
        width: 50,
        borderColor: "#F7B086",

    }
})

export default OptionColorPage;