import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-shadow-cards";
import { theme } from "../assets/theme";

export default function ShopInfo(props) {
  return (
    <Card style={styles.cardContainer}>
      <Text style={styles.itemName}>{props.data.name}</Text>
      <Text style={styles.itemCode}>{props.data.code}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: theme.colors.cyan,
    alignSelf: "center",
  },
  itemName: {
    fontSize: 20,
    color: theme.colors.gray,
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 15,
    color: theme.colors.gray,
  },
});
