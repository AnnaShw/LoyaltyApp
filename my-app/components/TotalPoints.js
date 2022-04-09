import React from "react";
import { StyleSheet, Text } from "react-native";

export default function TotalPoints({ children }) {

  return (<Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      fontWeight: "bold",
      color: "#FFFFFF",
      textAlign: "center",
      padding: 12,
    },
  });