import React from "react";
import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import {
  selectDeliveryPrice,
  selectSubTotal,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCardTotal = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // const totalPrice = cartItems.reduce((total, item) => {
  //   const totalPriceOfItem = total + item.product.price * item.quantity;
  //   return totalPriceOfItem;
  // }, 0);

  const subTotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const totalPrice = useSelector(selectTotal);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}></Text>
        <Text>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text>{deliveryFee}US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{totalPrice} US$</Text>
      </View>
    </View>
  );
};
const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={cart}
          renderItem={({ item }) => <CartListItem cartItem={item} />}
          ListFooterComponent={ShoppingCardTotal}
        />
      </ScrollView>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    borderColor: "gainsboro",
    paddingTop: 10,
    borderTopWidth: 1,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    bottom: 0,
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ShoppingCart;
