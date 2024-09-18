import { NavigationContainer } from "@react-navigation/native"
import MainTabNavigator from "./mainTabNavigation"


const Layout = () => {

    return (
        <NavigationContainer>
            <MainTabNavigator />
        </NavigationContainer>
    )
}

export default Layout;