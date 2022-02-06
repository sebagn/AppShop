import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { CARTDATA } from "../../utils/data/cartdata";
import CartItem from "../../components/cart-item";
import { useSelector } from "react-redux";

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const handleConfirm = () => {
        console.warn("Confirmar compra");
    }

    const handleDelete = (id) => {
        console.warn("Eliminar item", id);
    }

    const renderItems = (data) => (
        <CartItem item={data.item} onDelete={handleDelete} />
    )
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={() => handleConfirm()}>
                    <Text>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>Total:</Text>
                        <Text style={styles.text}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart;