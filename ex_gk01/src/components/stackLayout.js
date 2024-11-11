
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./homPage";
import ShoppingPage from "./shoppingPage";
import DetailBikePage from "./detailBikePage";
import ManageBikePage from "./manageBikePage";
import EditBikePage from "./editBikePage";
const StackLayout = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomPage" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="ShoppingPage" component={ShoppingPage} />
                <Stack.Screen name="DetailBikePage" component={DetailBikePage} />
                <Stack.Screen name="ManageBikePage" component={ManageBikePage} />
                <Stack.Screen name="EditBikePage" component={EditBikePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackLayout;