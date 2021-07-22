import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
  useColorScheme,
} from "react-native";
import Modal from "react-native-modal";

export default function CuisineTypeModal(props) {
  const [isDark, setIsDark] = useState(colorScheme === "dark");
  const colorScheme = useColorScheme();

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

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
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="American" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="Asian" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="British" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="Caribbean" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button
              title="Central Europe"
              color={isDark ? "#3c2f2f" : "#fff4e6"}
            />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="Chinese" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button
              title="Eastern Europe"
              color={isDark ? "#3c2f2f" : "#fff4e6"}
            />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="French" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="Indian" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="Italian" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="Japanese" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="Kosher" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button
              title="Mediterranean"
              color={isDark ? "#3c2f2f" : "#fff4e6"}
            />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="Mexican" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button
              title="Middle Eastern"
              color={isDark ? "#3c2f2f" : "#fff4e6"}
            />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button title="Nordic" color={isDark ? "#3c2f2f" : "#fff4e6"} />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button
              title="South American"
              color={isDark ? "#3c2f2f" : "#fff4e6"}
            />
          </Pressable>
          <Pressable
            onPress={() => console.log("Hello")}
            style={[
              styles.buttonStyle,
              isDark
                ? { backgroundColor: "#fff4e6", color: "#3c2f2f" }
                : { backgroundColor: "#3c2f2f", color: "#fff4e6" },
            ]}
          >
            <Button
              title="South East Asian"
              color={isDark ? "#3c2f2f" : "#fff4e6"}
            />
          </Pressable>
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
