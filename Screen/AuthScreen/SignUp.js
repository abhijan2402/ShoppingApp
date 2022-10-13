import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import auth from '@react-native-firebase/auth';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import InputBox from '../../components/InputBox';
const SignUp = ({ navigation }) => {
    function signIN(){
        auth()
        .createUserWithEmailAndPassword('takc@example.com', 'nin51981!')
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.titleText}>
                    Hello! SignUp to get started
                </Text>
                <View>
                    <InputBox
                        type="user"
                        iconImageLink={require("../../Assets/user.png")}
                    />
                    <InputBox
                        type="email"
                        iconImageLink={require("../../Assets/mail.png")}
                    />
                    <InputBox
                        type="Password"
                        iconImageLink={require("../../Assets/lock.png")}
                    />
                </View>
                <TouchableOpacity style={[styles.Input, { borderWidth: 0, backgroundColor: "#3063A0", width: windowWidth / 2.8, justifyContent: "center", borderRadius: 13, padding: 0, marginTop: 30, alignSelf: "flex-end", display: "flex", flexDirection: "row" }]}>

                    <Text style={{ color: "white", textAlign: "center", fontSize: 20, margin: 0, padding: 0, alignSelf: "center" }}
                        onPress={() => signIN()}
                    >
                        SignUp
                    </Text>
                    <Image
                        style={[styles.BackImg, { height: 30, width: 30 }]}
                        source={{ uri: "https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-10.png" }}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonTextContainer}>
                <Text style={{
                    color: "white", fontWeight: "bold", fontSize: 15
                }}>Already Have an Account ?</Text>
                <TouchableOpacity style={styles.customButtom}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={{ color: "#3063A0", fontWeight: "bold", fontSize: 15 }}>Login</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#3063A0",
        padding: 10,
        paddingVertical:30
    },
    buttonTextContainer: {
        backgroundColor: "#3063A0",
        width: windowWidth - 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 10
    },
    customButtom: {
        backgroundColor: "white",
        padding: 8,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    itemContainer: {
        backgroundColor: "white",
        width: windowWidth - 40,
        height: 2 * (windowHeight / 2.7),
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10
    },
    titleText: {
        color: "black",
        // backgroundColor:"red",
        fontSize: 35,
        fontWeight: "bold",
        width: '60%',
        alignSelf: "flex-start",
        marginHorizontal: 10,
        padding: 10
    },
    icomView: {
        backgroundColor: '#6AA6EE',
        width: 80,
        padding: 5,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 20
    },
    iconImage: {
        height: 30,
        width: 30
    },
    BackImg: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 10,
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
})
export default SignUp;