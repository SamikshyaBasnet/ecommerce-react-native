import React from "react";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import products from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../store/ProductSlice";
const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            //upate selected product
            dispatch(productSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
      keyExtractor={(item, i) => `${item} + ${i}`}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: { width: "50%", padding: 1 },
});

export default ProductsScreen;
