import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "react-native";

export default function ProgrammName() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/programmLogo.png")}
        style={styles.img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: "85%",
    height: 100,
    alignSelf: "center",
  },
});
