import React from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import ShopInfo from "./ShopInfo";


export default function PointsPerShop() {
  const [items, setItems] = React.useState([
    { name: "ShopName", code: "Points", id: "1" },
    { name: "ShopName", code: "Points", id: "2" },
    { name: "ShopName", code: "Points", id: "3" },
    { name: "ShopName", code: "Points", id: "4" },
    { name: "ShopName", code: "Points", id: "5" },
    { name: "ShopName", code: "Points", id: "6" },
    { name: "ShopName", code: "Points", id: "7" },
    { name: "ShopName", code: "Points", id: "8" },
    { name: "ShopName", code: "Points", id: "9" },
    { name: "ShopName", code: "Points", id: "10" },
    { name: "ShopName", code: "Points", id: "11" },
    { name: "ShopName", code: "Points", id: "12" },
    { name: "ShopName", code: "Points", id: "13" },
    { name: "ShopName", code: "Points", id: "14" },

  ]);
  return (
    <SafeAreaView >
      <FlatList
        data={items}
        style={styles.gridView}
        keyExtractor={(item) => item.id}
        spacing={10}
        renderItem={({ item }) => (
         <ShopInfo data={item}/>
        )}
        ContentContainerStyle={{
          flexGrow: 1,
          }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
  },
});
