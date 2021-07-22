import React from "react";
import { Pressable, Button, StyleSheet } from "react-native";

export default function CuisineButton(props) {
  return (
    <Pressable
      style={[
        styles.buttonStyle,
        props.isDark
          ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
          : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
      ]}
    >
      <Button
        title={props.title}
        onPress={() => {
          props.setTitle(props.title.toLowerCase());
          props.setVisible(false);
        }}
        color={props.isDark ? "#3c2f2f" : "#fff4e6"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 7,
    borderRadius: 7,
    margin: 5,
  },
});
