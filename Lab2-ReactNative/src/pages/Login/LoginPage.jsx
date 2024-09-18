import { View, StyleSheet, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const LoginPage = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#f9c902', '#c19c01']}
                style={styles.button}
            >
                <Text style={styles.text}>Sign in with Facebook</Text>
            </LinearGradient>
            <View style={styleLoginPage.containerLoginPage}>

            </View>
        </SafeAreaView>

    )
}
const styleLoginPage = StyleSheet.create({
    containerLoginPage: {
        flex: 1,
        backgroundColor: "pink",
    }
})
export default LoginPage;