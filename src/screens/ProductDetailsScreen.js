import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import products from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Image container */}
      <ScrollView
        style={{ marginBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={product?.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    fontSize: 18,
    fontWeight: "300",
    lineHeight: 30,
    marginVertical: 10,
  },
  button: {
    position: "absolute",
    bottom: 30,
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

export default ProductDetailsScreen;
