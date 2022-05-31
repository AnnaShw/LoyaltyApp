import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../assets/theme";

export default function Header(props) {
  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: theme.colors.primary,
    marginVertical: 50,
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 12,
  },
});
