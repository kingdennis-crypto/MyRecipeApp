import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

// https://github.com/react-native-modal/react-native-modal

// #4b3832
// #854442
// #fff4e6
// #3c2f2f
// #be9b7b

export default function NameModal(props) {
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  async function StoreName() {
    props.setValue(props.value + 1);
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
        onBackdropPress={() => {
          props.setIsVisible(false);
          setIsFocused(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.titleContainer}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: "600",
                marginBottom: 3,
                color: "#3c2f2f",
              }}
            >
              Please change your name
            </Text>
            <Text
              style={{
                textTransform: "uppercase",
                color: "#4b3832",
                fontWeight: "500",
              }}
            >
              Old Name: {props.name}
            </Text>
          </View>
          <View>
            <TextInput
              onFocus={() => setIsFocused(!isFocused)}
              onEndEditing={() => setIsFocused(!isFocused)}
              style={
                isFocused ? styles.focusedTextInput : styles.textInputStyle
              }
              onChangeText={setName}
              value={name}
              placeholder="Enter your name..."
            />
            <Pressable style={styles.submitButton}>
              <Button title="Change Name" onPress={StoreName} color="#fff4e6" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#FFF",
    borderRadius: 7,
    height: "50%",
    padding: 10,
  },

  textInputStyle: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.0)",
    borderRadius: 7,
    backgroundColor: "#E4E4E4",
  },

  focusedTextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#851e3e",
    borderRadius: 7,
    backgroundColor: "#E4E4E4",
  },

  titleContainer: {
    marginBottom: 15,
  },

  submitButton: {
    padding: 5,
    marginTop: 10,
    backgroundColor: "#3c2f2f",
    borderRadius: 7,
  },
});