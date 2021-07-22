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

export default function MealTypeModal(props) {
  const [isDark, setIsDark] = useState(colorScheme === "dark");
  const colorScheme = useColorScheme();

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const mealtypes = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];

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
          MealType
        </Text>
        <ScrollView>
          {mealtypes.map((item) => (
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

  modalTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 10,
  },
});
