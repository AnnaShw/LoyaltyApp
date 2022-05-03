import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("Choose a brand");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{
          borderRadius: 5,
          height: 50,
          width: 150,
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Choose a brand" value="choose brand" />
        <Picker.Item label="ShopName" value="ShopName" />
        <Picker.Item label="ShopName" value="ShopName" />
        <Picker.Item label="ShopName" value="ShopName" />
        <Picker.Item label="ShopName" value="ShopName" />
        <Picker.Item label="ShopName" value="ShopName" />
        <Picker.Item label="ShopName" value="ShopName" />
        <Picker.Item label="ShopName" value="ShopName" />
        <Picker.Item label="ShopName" value="ShopName" />
        <Picker.Item label="ShopName" value="ShopName" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    color: "#fff",
  },
});

export default App;
