import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import CarsList from "./components/CarsList";
import Header from "./components/Headers"

export default function App() {
  return (
    <View style={styles.container}>
      
      <Header />
      <CarsList />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
