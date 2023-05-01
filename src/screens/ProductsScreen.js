import React from "react";
import products from "../data/products";
import { StyleSheet, FlatList, Image, View } from "react-native";

const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
      numColumns={2}
      keyExtractor={(item) => item}
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
