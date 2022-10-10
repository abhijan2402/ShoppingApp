import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import InputBox from '../../components/InputBox'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Cart() {
    return (
        <View style={styles.AccountScreen}>
            <View style={styles.OrderHeader}>
                <TouchableOpacity style={styles.TOBackImg} onPress={() => { setSeller(false) }}>
                    <Image
                        style={styles.BackImg}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/130/130882.png" }}
                    />
                </TouchableOpacity>
                <View style={styles.OrderHeaderText}>

                    <Text style={[styles.OrderHeaderInnerText, { fontSize: 24 }]}>Cart</Text>
                </View>
            </View>
            <View>
                <View style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
                    <TouchableOpacity style={{ width: windowWidth / 2.5, }}>
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={{ uri: "https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" }}
                        />
                    </TouchableOpacity>
                    <View style={{ width: windowWidth / 1.7, display: "flex", flexDirection: "row", }}>

                        <View style={{ width: windowWidth / 3, justifyContent: "center" }}>
                            <Text style={styles.PriceTxt}>Special Pizza</Text>
                            <Text style={styles.PriceTxt}>440/-</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}><Text style={styles.PlusBtn}>+</Text><Text style={{ fontSize: 20 }}>4</Text><Text style={styles.PlusBtn}>-</Text></View>

                    </View>
                </View>
                <View style={styles.BlueLine}></View>
            </View>
            <View>
                <View style={{ display: "flex", flexDirection: "row", }}>
                    <TouchableOpacity style={{ width: windowWidth / 2.5, }}>
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={{ uri: "https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" }}
                        />
                    </TouchableOpacity>
                    <View style={{ width: windowWidth / 1.7, display: "flex", flexDirection: "row", }}>

                        <View style={{ width: windowWidth / 3, justifyContent: "center" }}>
                            <Text style={styles.PriceTxt}>Special Pizza</Text>
                            <Text style={styles.PriceTxt}>440/-</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}><Text style={styles.PlusBtn}>+</Text><Text style={{ fontSize: 20 }}>4</Text><Text style={styles.PlusBtn}>-</Text></View>

                    </View>
                </View>
                <View style={styles.BlueLine}></View>
            </View>
            <View>
                <View style={{ display: "flex", flexDirection: "row", }}>
                    <TouchableOpacity style={{ width: windowWidth / 2.5, }}>
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={{ uri: "https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" }}
                        />
                    </TouchableOpacity>
                    <View style={{ width: windowWidth / 1.7, display: "flex", flexDirection: "row", }}>

                        <View style={{ width: windowWidth / 3, justifyContent: "center" }}>
                            <Text style={styles.PriceTxt}>Special Pizza</Text>
                            <Text style={styles.PriceTxt}>440/-</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}><Text style={styles.PlusBtn}>+</Text><Text style={{ fontSize: 20 }}>4</Text><Text style={styles.PlusBtn}>-</Text></View>

                    </View>
                </View>
                <View style={styles.BlueLine}></View>
            </View>
            <View style={styles.MainInput}>
                <TextInput placeholder='PromoCode' style={styles.TextInput} />
                <TouchableOpacity style={styles.PromoBtn}><Text style={{ color: "white" }}>Apply</Text></TouchableOpacity>
            </View>
            <View style={{ borderWidth: 3, borderColor: "#3063A0", borderRadius: 13, marginHorizontal: 20 }}>
                <View style={{ display: 'flex', flexDirection: "row", marginVertical: 5 }}>
                    <Text style={[styles.PriceTxt1, { width: windowWidth / 1.5, marginLeft: 5 }]}>Sub Total</Text>
                    <Text style={styles.PriceTxt1}>$ 300</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: "row", marginVertical: 5 }}>
                    <Text style={[styles.PriceTxt1, { width: windowWidth / 1.5, marginLeft: 5 }]}>Shipping</Text>
                    <Text style={styles.PriceTxt1}>$ 300</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: "row", marginVertical: 5 }}>
                    <Text style={[styles.PriceTxt1, { width: windowWidth / 1.5, marginLeft: 5 }]}>Total</Text>
                    <Text style={styles.PriceTxt1}>$ 300</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.finalBtn}><Text style={{ fontSize: 23, color: "white" }}>Finalize Order</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    AccountScreen: {
        backgroundColor: "white",
        height: windowHeight
    },
    TOBackImg: {
        height: windowHeight / 15,
        justifyContent: "center",
        marginHorizontal: 10
    },
    BackImg: {
        width: 25,
        height: 25
    },
    OrderHeader: {
        display: 'flex',
        flexDirection: "row",
    },
    OrderHeaderText: {
        fontSize: 15,
        color: "black",
        width: windowWidth / 1.3,
        justifyContent: "center",
    },
    OrderHeaderInnerText: {
        fontSize: 20,
        color: "black",
        justifyContent: 'center',
        alignSelf: "center",
        fontWeight: "800",
    },
    PlusBtn: {
        fontSize: 20,
        paddingHorizontal: 7,
        paddingVertical: 1,
        backgroundColor: "red",
        marginHorizontal: 3,
        borderRadius: 5,
        width: 25, height: 25,
        justifyContent: "center",
        alignItems: 'center',
        alignContent: "center",
        color: "white"
    },
    PriceTxt: {
        fontSize: 15,
        color: "black",
        marginVertical: 5
    },
    BlueLine: {
        backgroundColor: "#3063A0",
        height: 2,
        marginHorizontal: 20
    },
    PromoBtn: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: windowWidth / 4.7
    },
    TextInput: {
        width: windowWidth / 1.5,
        borderWidth: 0.5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: "white"
    },
    MainInput: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 15,
        backgroundColor: "#3063A0"

    },
    PriceTxt1: {
        color: "black",
        fontSize: 20,
        justifyContent: "center"
    },
    finalBtn: {
        backgroundColor: "#3063A0",
        marginHorizontal: 20,
        marginVertical: 50,
        paddingVertical: 3,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        borderRadius: 20,
        borderColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5

    }
});
export default Cart