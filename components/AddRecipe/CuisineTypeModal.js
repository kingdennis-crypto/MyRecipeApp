import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from "react-native";
import Modal from "react-native-modal";
import uuid from "react-native-uuid";
import ModalButton from "./ModalButton";

export default function CuisineTypeModal(props) {
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const colorScheme = useColorScheme();

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const cuisines = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian",
  ];

  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={() => props.setIsVisible(false)}
    >
      <View
        style={[
          styles.modalBody,
          isDark
            ? { backgroundColor: "#3c2f2f" }
            : { backgroundColor: "#fff4e6" },
        ]}
      >
        <Text
          style={[
            styles.modalTitle,
            isDark ? { color: "#fff4e6" } : { color: "#3c2f2f" },
          ]}
        >
          CuisineType
        </Text>
        <ScrollView>
          {cuisines.map((item) => (
            <ModalButton
              key={uuid.v4()}
              title={item}
              isDark={isDark}
              setTitle={props.setTitle}
              setVisible={props.setIsVisible}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBody: {
    height: 300,
    backgroundColor: "#fff4e6",
    borderRadius: 7,
    padding: 10,
  },

  buttonStyle: {
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 7,
    borderRadius: 7,
    margin: 5,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 10,
  },
});
