import React from "react";
import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ConfirmationModal(props) {
  async function addRecipe() {
    try {
      await AsyncStorage.setItem(
        `@OwnRecipe:${Math.floor(Math.random() * 100000)}`,
        JSON.stringify(props.item)
      );
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Modal isVisible={props.isVisible}>
      <View style={{ height: 200, backgroundColor: "#FFF" }}>
        <Text>Confirm</Text>
        {props.item.map((data) => (
          <>
            <Text>{data.id}</Text>
            <Text>{data.label}</Text>
            <Text>{data.time}</Text>
            <Text>{data.mealtype}</Text>
            <Text>{data.cuisinetype}</Text>
          </>
        ))}
        <View style={{ flexDirection: "row" }}>
          <Button title="Cancel" onPress={() => props.setIsVisible(false)} />
          <Button title="Add Recipe" onPress={addRecipe} />
        </View>
      </View>
    </Modal>
  );
}
