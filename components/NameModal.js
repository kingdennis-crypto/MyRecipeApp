import React, { useState } from "react";
import { View, Text, Button, TouchableWithoutFeedback } from "react-native";
import Modal from "react-native-modal";

export default function NameModal(props) {
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
          <Text>I am the modal</Text>
        </View>
      </Modal>
    </View>
  );
}
