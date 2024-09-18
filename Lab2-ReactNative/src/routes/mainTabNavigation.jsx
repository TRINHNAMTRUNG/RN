import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping, faGear, faComment } from '@fortawesome/free-solid-svg-icons';


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartPage from "../pages/Cart/CartPage.jsx";
import ReviewPage from "../pages/Review/ReviewPage.jsx";
import SettingPage from "../pages/Setting/SettingPage.jsx";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";

const MainTabNavigator = () => {
    const Tab = createBottomTabNavigator();
    const screenOptions = ({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#105EF3',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            paddingBottom: 5,
            height: 50,
        },
        tabBarIcon: ({ color, focused }) => {
            let icon;
            if (route.name === 'CartPage') {
                icon = faCartShopping;
            } else if (route.name === 'ReviewPage') {
                icon = faComment;
            } else if (route.name === 'SettingPage') {
                icon = faGear;
            }
            return <FontAwesomeIcon icon={icon} size={20} color={color} />;
        },
        tabBarButton: (props) => (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.2)', true)}
                {...props}
            >
                <View style={stylesMainTabNavigator.tab}>
                    {props.children}
                </View>
            </TouchableNativeFeedback>
        ),
    });
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="CartPage" component={CartPage} />
            <Tab.Screen name="ReviewPage" component={ReviewPage} />
            <Tab.Screen name="SettingPage" component={SettingPage} />
        </Tab.Navigator>
    )
}

const stylesMainTabNavigator = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default MainTabNavigator;