import { StyleSheet, TextInput, View, Text, TouchableOpacity, Alert, Dimensions, ScrollView, Image, FlatList } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import StyleGlobal from "./styleGlobal"
import { createBikeService, deleteBikeService, getAllBikeService, getBikeByIdService, updateBikeService } from "../services/bikeServices"
import { useEffect, useState } from "react"

const { height, width } = Dimensions.get("window");

const ManageBikePage = ({ navigation }) => {
    const [listBike, setListBike] = useState([]);
    const [searchID, setSearchID] = useState("");
    useEffect(() => {
        fetchDataListBike();
    }, []);
    const fetchDataListBike = async () => {
        let data = await getAllBikeService();
        setListBike(data);
    };
    const showMess = (mess) => {
        Alert.alert(
            "Message system",
            mess,
            [{ text: "OK" }]
        )
    };
    const confirmDeleteUser = (bikeID) => {
        Alert.alert(
            "Xác nhận xoá",
            "Bạn có chắc chắn muốn xoá xe này?",
            [
                {
                    text: "Cancel",
                    style: "cancel", // Kiểu nút Cancel
                },
                {
                    text: "Yes",
                    onPress: () => handleDelete(bikeID),
                }
            ],
            { cancelable: true } // Cho phép huỷ popup bằng cách nhấn ra ngoài
        );
    };
    const handlesearch = async (id) => {
        try {
            let bike = await getBikeByIdService(id);
            setListBike([bike]);
        } catch (error) {
            showMess(error.message);
        }
    };
    const handleEdit = async (bike) => {
        await updateBikeService(bike);
        let newList = listBike.map((element) => element.id === bike.id ? bike : element);
        setListBike(newList);
    }
    const handleAdd = async (bike) => {
        await createBikeService(bike);
        let newList = [bike, ...listBike];
        setListBike(newList);
    }
    const handleDelete = async (id) => {
        try {
            await deleteBikeService(id);
            let newList = listBike.filter((element) => element.id !== id);
            setListBike(newList);
        } catch (error) {
            showMess(error.message);
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={StyleGlobal.container}>
                <View style={styleManageBikePage.wrapView}>
                    <Text style={StyleGlobal.textTitle}>Manage Bikes</Text>
                    <View style={styleManageBikePage.boxSearch}>
                        <TextInput style={styleManageBikePage.textInput} value={searchID} onChangeText={(value) => setSearchID(value)} placeholder="Search Bike By ID" />
                        <TouchableOpacity style={styleManageBikePage.btnSearch} onPress={() => handlesearch(searchID)}>
                            <Text style={styleManageBikePage.textTitle}>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styleManageBikePage.btnAdd} onPress={() => navigation.navigate("EditBikePage", { handle: handleAdd, type: "add" })}>
                        <Text style={styleManageBikePage.textTitle}>Add A Bike</Text>
                    </TouchableOpacity>

                    <FlatList
                        style={styleManageBikePage.scroll}
                        numColumns={2}
                        data={listBike}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        columnWrapperStyle={{ justifyContent: "space-between" }}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[styleManageBikePage.card]} >
                                <Image source={{ uri: item.image }} style={styleManageBikePage.imageCard} />
                                <Text style={[StyleGlobal.textTitle, { fontSize: 15, color: "#90918C" }]}>{item.name}</Text>
                                <Text style={[StyleGlobal.textTitle, { fontSize: 15, color: "#E94141" }]}>$ {item.price}</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <TouchableOpacity
                                        style={[styleManageBikePage.btnEdit, { backgroundColor: "#717981" }]}
                                        onPress={() => navigation.navigate("EditBikePage", { bike: item, handle: handleEdit, type: "edit" })}
                                    >
                                        <Text style={[styleManageBikePage.textTitle, { color: "white" }]}>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styleManageBikePage.btnEdit, { backgroundColor: "#E94141" }]} onPress={() => confirmDeleteUser(item.id)}>
                                        <Text style={[styleManageBikePage.textTitle, { color: "white" }]}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )}
                        horizontal={false}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styleManageBikePage = StyleSheet.create({
    wrapView: {
        padding: 16,
        flex: 1
    },
    scroll: {
        flex: 1,
        // backgroundColor: "pink"
    },
    card: {
        width: "47%",
        // flex: 1,
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
    },
    textInput: {
        borderColor: "gray",
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 10,
        flex: 1,
        borderRadius: 5
    },
    textTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "white"
    },
    boxSearch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 20
    },
    btnSearch: {
        backgroundColor: "#E94141",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5
    },
    btnAdd: {
        backgroundColor: "#6ACB7E",
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 10
    },
    btnEdit: {
        borderRadius: 10,
        width: 60,
        padding: 5,
        alignItems: "center"
    }
})

export default ManageBikePage;