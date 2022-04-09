import React from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../assets/theme";

export default function TotalPoints({ children }) {

  return (<Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      fontWeight: "bold",
      color: theme.colors.orange,
      textAlign: "center",
      padding: 12,
    },
  });