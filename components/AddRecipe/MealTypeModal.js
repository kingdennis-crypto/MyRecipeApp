import React from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";

export default function MealTypeModal(props) {
  // { label: "Breakfast", value: "breakfast" },
  //   { label: "Dinner", value: "dinner" },
  //   { label: "Lunch", value: "lunch" },
  //   { label: "Snack", value: "snack" },
  //   { label: "Teatime", value: "teatime" },

  return (
    <Modal
      style={{ height: 200, backgroundColor: "#FFF" }}
      isVisible={props.isVisible}
    >
      <View>
        <Text>MealType</Text>
      </View>
    </Modal>
  );
}
