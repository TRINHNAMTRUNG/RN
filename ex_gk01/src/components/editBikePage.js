import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import StyleGlobal from "./styleGlobal";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";



const EditBikePage = ({ navigation, route }) => {
    const params = route.params;
    const { handle, type } = params;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setcCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        if (type === "edit") {
            let bike = params.bike;
            setName(bike.name);
            setPrice(bike.price.toString());
            setImage(bike.image);
            setcCategory(bike.category);
            setQuantity(bike.quantity.toString());
            setStatus(bike.status === true ? "Còn hàng" : "Hết hàng");
            setDescription(bike.description);
        }
    }, []);

    const submitEdit = () => {
        const bike = {
            id: params.bike.id,
            name,
            image,
            category,
            quantity: parseInt(quantity, 10),
            status: status === "Còn hàng" ? true : false,
            description,
            price: parseInt(price)
        };
        handle(bike);
        navigation.goBack();
    }
    const submitAdd = () => {
        const bike = {
            name,
            image,
            category,
            quantity: parseInt(quantity, 10),
            status: status === "Còn hàng" ? true : false,
            description,
            price: parseInt(price)
        };
        handle(bike);
        navigation.goBack();
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={StyleGlobal.container}>
                <View style={styleEditBikePage.wrapView}>
                    <View style={styleEditBikePage.wrapInput}>
                        <Text style={styleEditBikePage.textLabel}>Name: </Text>
                        <TextInput
                            value={name}
                            onChangeText={(value) => setName(value)}
                            style={styleEditBikePage.textInput}
                        />
                    </View>
                    <View style={styleEditBikePage.wrapInput}>
                        <Text style={styleEditBikePage.textLabel}>Price: </Text>
                        <TextInput
                            value={price}
                            onChangeText={(value) => setPrice(value)}
                            style={styleEditBikePage.textInput}
                        />
                    </View>
                    <View style={styleEditBikePage.wrapInput}>
                        <Text style={styleEditBikePage.textLabel}>Image: </Text>
                        <TextInput
                            value={image}
                            onChangeText={(value) => setImage(value)}
                            style={styleEditBikePage.textInput}
                        />
                    </View>
                    <View style={styleEditBikePage.wrapInput}>
                        <Text style={styleEditBikePage.textLabel}>Category: </Text>
                        <TextInput
                            value={category}
                            onChangeText={(value) => setcCategory(value)}
                            style={styleEditBikePage.textInput}
                        />
                    </View>
                    <View style={styleEditBikePage.wrapInput}>
                        <Text style={styleEditBikePage.textLabel}>Quantity: </Text>
                        <TextInput
                            value={quantity}
                            onChangeText={(value) => setQuantity(value)}
                            style={styleEditBikePage.textInput}
                        />
                    </View>
                    <View style={styleEditBikePage.wrapInput}>
                        <Text style={styleEditBikePage.textLabel}>Status: </Text>
                        <TextInput
                            value={status}
                            onChangeText={(value) => setStatus(value)}
                            style={styleEditBikePage.textInput}
                        />
                    </View>
                    <View style={styleEditBikePage.wrapInput}>
                        <Text style={styleEditBikePage.textLabel}>Description: </Text>
                        <TextInput
                            value={description}
                            onChangeText={(value) => setDescription(value)}
                            style={styleEditBikePage.textInput}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
                        <TouchableOpacity style={[styleEditBikePage.btnEdit, { backgroundColor: "#717981" }]} onPress={() => navigation.goBack()}>
                            <Text style={[styleEditBikePage.textTitle, { color: "white" }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styleEditBikePage.btnEdit, { backgroundColor: "#3B82F6" }]} onPress={() => type === "edit" ? submitEdit() : submitAdd()}>
                            <Text style={[styleEditBikePage.textTitle, { color: "white" }]}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styleEditBikePage = StyleSheet.create({
    wrapInput: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 15
    },
    wrapView: {
        flex: 1,
        padding: 16
    },
    textInput: {
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "gray",
        fontSize: 15,
        flex: 1
    },
    textLabel: {
        fontSize: 15,
        fontWeight: "600",
        marginRight: 10,
        width: 90
    },
    btnEdit: {
        borderRadius: 10,
        flex: 1,
        padding: 5,
        marginHorizontal: 10,
        alignItems: "center"
    },
    textTitle: {
        fontSize: 14
    },
})

export default EditBikePage;