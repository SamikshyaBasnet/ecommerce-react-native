import React from "react";
import products from "../data/products";
import {
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Image,
  View,
} from "react-native";

const ProductsScreen = ({ navigation }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Product Details")}
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
