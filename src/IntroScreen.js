import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import logo from "../assets/images/calc-logo.png";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#b0efff",
  },

  inner: {
    width: 250,
    height: 250,
    backgroundColor: "inherit",
    
  },
  logo: {
    width: 230,
    height: 230,
  },
});

export default IntroScreen;
