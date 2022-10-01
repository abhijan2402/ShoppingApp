import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function LogIn() {
    return (
        <View style={styles.Header}>
            <View style={styles.LogInBox}>
                <Text style={[styles.LogInBoxText, { fontSize: 23, fontWeight: "800", marginVertical: 10 }]}>Hello Again!</Text>
                <Text style={styles.LogInBoxText}>Welcome Back</Text>
                <Text style={styles.LogInBoxText}>Buy & sell new products</Text>
                <View style={styles.InputBox}>
                    <View style={styles.Input}>

                        <TextInput
                            placeholder='Email'

                        />
                    </View>
                    <View style={styles.Input}>

                        <TextInput
                            placeholder='Password'

                        />
                    </View>
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
                        source={{ uri: "https://cdn-icons-png.flaticon.com/128/281/281764.png" }}
                    />
                    <Image
                        style={styles.Logos}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/128/733/733547.png" }}
                    />
                    <Image
                        style={styles.Logos}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/128/2504/2504839.png" }}
                    />

                </View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.bottomText}>Don't have account ?</Text>
                <TouchableOpacity style={styles.SignUpbtn}>
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
        justifyContent: "center"
    },
    LogInBox: {
        backgroundColor: "#FFFFFF",
        height: windowHeight / 1.5,
        // justifyContent: "center",
        borderRadius: 30,
        marginHorizontal: 20,
        alignContent: "center",
        textAlign: "center",
        // alignSelf: "center"
    },
    LogInBoxText: {
        fontSize: 15,
        color: "black",
        textAlign: 'center'
    },
    InputBox: {
        marginTop: 30,
        // borderWidth: 1
    },
    Input: {
        borderWidth: 1,
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 45,
        padding: 3,
        paddingLeft: 15
    },
    BackImg: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 10,
        // borderWidth: 1
    },
    LogBtn: {
        display: "flex",
        flexDirection: "row"

    },
    LogBtn1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 80
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
        bottom: 15,
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