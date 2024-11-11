import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Button } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import StyleGlobal from "./styleGlobal"
import { useEffect, useState } from "react"
import { getAllBikeService, getBikeByCtgService } from "../services/bikeServices"

const { width, height } = Dimensions.get("window");
const ShoppingPage = ({ navigation }) => {
    const [listBike, setListBike] = useState([]);
    useEffect(() => {
        fetchDataListBike();
    }, []);
    const fetchDataListBike = async () => {
        let data = await getAllBikeService();
        setListBike(data);
    }
    const handleClickFilter = async (category) => {
        if (category === "All") {
            fetchDataListBike();
        } else {
            let listBikeByCtg = await getBikeByCtgService(category);
            setListBike(listBikeByCtg);
        }
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={StyleGlobal.container}>
                <View style={StyleGlobal.wrapView}>
                    <Text style={[StyleGlobal.textTitle, { textAlign: "none", color: "#E94141" }]}>The world’s Best Bike</Text>
                    <View style={StyleGlobal.wrapViewSpaceBetween}>
                        <TouchableOpacity style={styleShoppingPage.buttonFilter} onPress={() => handleClickFilter("All")}>
                            <Text style={styleShoppingPage.textBtnFilter}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleShoppingPage.buttonFilter} onPress={() => handleClickFilter("Roadbike")}>
                            <Text style={styleShoppingPage.textBtnFilter}>Roadbike</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleShoppingPage.buttonFilter} onPress={() => handleClickFilter("Mountain")}>
                            <Text style={styleShoppingPage.textBtnFilter}>Mountain</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        style={styleShoppingPage.scroll}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styleShoppingPage.wrapList}>
                            {listBike && listBike.length !== 0 &&
                                listBike.map((element, index) => (
                                    <TouchableOpacity style={styleShoppingPage.card} key={`${index}-imageBike`} onPress={() => { navigation.navigate("DetailBikePage", { bikeInfo: element }) }}>
                                        <Image source={{ uri: element.image }} style={styleShoppingPage.imageCard} />
                                        <Text style={[StyleGlobal.textTitle, { fontSize: 15, color: "#90918C" }]}>{element.name}</Text>
                                        <Text style={[StyleGlobal.textTitle, { fontSize: 15, color: "#E94141" }]}>$ {element.price}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styleShoppingPage = StyleSheet.create({
    buttonFilter: {
        borderColor: "#E94141",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 20,
        marginVertical: 20
    },
    textBtnFilter: {
        fontSize: 18,
        color: "#E94141"
    },
    scroll: {
        flex: 1,
        // backgroundColor: "pink",
    },
    wrapList: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    card: {
        width: "47%",
        height: height * 0.3,
        backgroundColor: "#fef5ed",
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        justifyContent: "space-around",

        elevation: 3,
    },
    imageCard: {
        width: "100%",
        height: "65%",
    }
})

export default ShoppingPage;