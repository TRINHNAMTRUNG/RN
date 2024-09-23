
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailProdPage from "./detailProdPage";
import OptionColorPage from "./OptionColorPage";

const StackLayout = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="DetailProd" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="DetailProd" component={DetailProdPage} />
                <Stack.Screen name="OptionColor" component={OptionColorPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackLayout;