import { StyleSheet, View } from "react-native";
import React from "react";

export default function Select(props) {
  return (
    <View style={styles.container}>
      <select
        name="type"
        id="type"
        onChange={(e) => props.onChange(e.target.value)}
      >
        place
        {props.items.map((item) => (
          <option key={Math.random()} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 36,
  },
});
