import { StatusBar } from "expo-status-bar";
import { Stack, useRouter } from "expo-router";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import Navigation from "./src/navigation";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
});
