import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function PointsPerShop() {
  const [items, setItems] = React.useState([
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
    { name: "ShopName", code: "Points" },
  ]);
  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: "red" }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});
