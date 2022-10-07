import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import InputBox from '../../components/InputBox';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function LogIn({ navigation }) {
    return (
        <View style={styles.Header}>
            <View style={styles.LogInBox}>
                <Text style={[styles.LogInBoxText, { fontSize: 23, fontWeight: "800", marginVertical: 10 }]}>Hello Again!</Text>
                <Text style={styles.LogInBoxText}>Welcome Back</Text>
                <Text style={styles.LogInBoxText}>Buy & sell new products</Text>
                <View style={styles.InputBox}>
                    <InputBox
                        type="Email"
                        iconImageLink={require("../../Assets/mail.png")}
                    />
                    <InputBox
                        type="Password"
                        iconImageLink={require("../../Assets/lock.png")}
                    />

                </View>
                <Text style={{ textAlign: "center", fontSize: 15, color: "black", marginVertical: 10 }}>Forgot password?</Text>
                <TouchableOpacity style={[styles.Input, { borderWidth: 0, backgroundColor: "#3063A0", width: windowWidth / 2.8, justifyContent: "center", borderRadius: 13, padding: 0, marginTop: 30, alignSelf: "flex-end", display: "flex", flexDirection: "row" }]}>

                    <Text style={{ color: "white", textAlign: "center", fontSize: 20, margin: 0, padding: 0, alignSelf: "center" }}>Login</Text>
                    <Image
                        style={[styles.BackImg, { height: 30, width: 30 }]}
                        source={{ uri: "https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-10.png" }}
                    />
                </TouchableOpacity>
                <View style={styles.LogBtn1}>
                    <Image
                        style={styles.Logos}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/128/2702/2702602.png" }}
                    />
                    <Image
                        style={styles.Logos}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/128/2111/2111393.png" }}
                    />
                    <Image
                        style={styles.Logos}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/128/733/733579.png" }}
                    />
                </View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.bottomText}>Don't have account ?</Text>
                <TouchableOpacity style={styles.SignUpbtn}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={{ fontSize: 15, textAlign: "center", color: "#3063A0" }}>SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Header: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "#3063A0",
        // justifyContent: "center"
    },
    LogInBox: {
        backgroundColor: "#FFFFFF",
        height: windowHeight / 1.5,
        borderRadius: 30,
        marginHorizontal: 20,
        // alignContent: "center",
        textAlign: "center",
        marginTop: 80
    },
    LogInBoxText: {
        fontSize: 18,
        color: "black",
        textAlign: 'center'
    },
    InputBox: {
        marginTop: 30,
    },
    Input: {
        borderWidth: 0.3,
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 45,
        padding: 3,
        paddingLeft: 15,
        backgroundColor: "lightgrey"
    },
    BackImg: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 10,
    },
    LogBtn: {
        display: "flex",
        flexDirection: "row"
    },
    LogBtn1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 70
    },
    Logos: {
        width: 30,
        height: 30,
        alignSelf: "center",
    },
    bottom: {
        borderWidth: 1,
        borderColor: "white",
        marginHorizontal: 34,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        position: 'absolute',
        bottom: 35,
        width: windowWidth - 70
    },
    bottomText: {
        color: "white",
        fontSize: 15,
        margin: 4,
        justifyContent: "center",
        marginTop: 16,
        marginLeft: 10,
        width: windowWidth - 198
    },
    SignUpbtn: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "white",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        padding: 5,
        width: windowWidth / 4
    }
});
export default LogIn