import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

// https://github.com/react-native-modal/react-native-modal

export default function NameModal(props) {
  const [name, setName] = useState("");

  // useEffect(() => {
  //   GetName();
  // });

  async function StoreName() {
    try {
      await AsyncStorage.setItem("Name", name);
    } catch (e) {
      console.log(e);
    }
  }

  async function GetName() {
    try {
      const value = await AsyncStorage.getItem("Name");
      if (value !== null) {
        setName(value);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View>
      <Modal
        isVisible={props.isVisible}
        onBackdropPress={() => props.setIsVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFF",
            marginVertical: 200,
          }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Please change your name</Text>
            <Text style={styles.oldNameText}>Old Name: Dennis</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={{ padding: 3, borderWidth: 1 }}
              onChangeText={setName}
              value={name}
              placeholder="Enter your name"
            />
            <Button title="Change Name" onPress={StoreName} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    width: "100%",
  },

  titleText: {
    fontSize: 28,
    fontWeight: "500",
  },

  oldNameText: {
    textTransform: "uppercase",
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
  },

  textInputContainer: {
    width: "90%",
  },
});
