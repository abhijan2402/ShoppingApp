import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, TouchableOpacity, Image } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ModelAddress = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <TouchableOpacity style={{ justifyContent: "flex-end", alignContent: "flex-end", textAlign: "right", width: windowWidth / 1.7 }} onPress={() => setModalVisible(!modalVisible)}>
                            <Image onPress={() => setModalVisible(!modalVisible)}
                                style={{ width: 16, height: 16, alignSelf: "flex-end" }}
                                source={{ uri: "https://cdn-icons-png.flaticon.com/512/2997/2997911.png" }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.modalText}>Address</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}

                        >
                            <Text style={styles.textStyle1}>Flat no P, divine institutee jaipur ,Rajasthan</Text>
                        </Pressable>
                        <View style={styles.Edit}>
                            <Text style={styles.EditText}>Edit</Text>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(props.type)}
            >
                <Text style={[styles.textStyle, { marginLeft: 0 }]}>Address</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        // borderRadius: 20,
        // padding: 10,
        // elevation: 2
        // borderWidth: 1
    },
    buttonOpen: {
        // backgroundColor: "#F194FF",
    },
    buttonClose: {
        // backgroundColor: "#2196F3",
    },
    textStyle: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: 16,
        alignSelf: "center",
        marginLeft: 0,
    },
    textStyle1: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: 16,
        alignSelf: "center",
        marginLeft: 0,
        color: "black"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        color: "black",
        fontWeight: "800"
    },
    Edit: {
        display: "flex",
        marginTop: 30,
    },
    EditText: {
        fontSize: 20,
        color: "red",
        fontWeight: "800",
    }

});

export default ModelAddress;