import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";

export default function CuisineTypeModal(props) {
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={() => props.setIsVisible(false)}
    >
      <View style={styles.modalBody}>
        <Text style={styles.modalTitle}>CuisineType</Text>
        <ScrollView>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="American" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Asian" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="British" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Caribbean" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Central Europe" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Chinese" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Eastern Europe" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="French" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Indian" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Italian" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Japanese" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Kosher" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Mediterranean" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Mexican" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Middle Eastern" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="Nordic" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="South American" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={styles.buttonStyle}
          >
            <Button title="South East Asian" />
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBody: {
    height: 300,
    backgroundColor: "#FFF",
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
  },
});
