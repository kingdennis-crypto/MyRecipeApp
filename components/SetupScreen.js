import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  useColorScheme,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SetupScreen() {
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  async function clearFirstTime() {
    try {
      await AsyncStorage.setItem("@FirstTime", "yes");
      await AsyncStorage.setItem("Name", name);
    } catch (e) {
      console.log(e);
    } finally {
      navigation.navigate("Home");
    }
  }

  return (
    <View style={isDark ? styles.darkContainer : styles.lightContainer}>
      <Text style={isDark ? styles.darkTitle : styles.lightTitle}>
        Please enter your name
      </Text>
      <View style={{ width: "90%" }}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Please enter your name..."
          style={isFocused ? styles.focusedTextInput : styles.defaultTextInput}
          onFocus={() => setIsFocused(isFocused ? false : true)}
          onEndEditing={() => setIsFocused(isFocused ? false : true)}
          placeholderTextColor="#3c2f2f"
        />
      </View>
      <Pressable style={styles.buttonStyle}>
        <Button title="Press Me" onPress={clearFirstTime} color="#3c2f2f" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff4e6",
  },

  darkContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3c2f2f",
  },

  buttonStyle: {
    backgroundColor: "#f2dec4",
    margin: 10,
    borderRadius: 7,
    padding: 5,
  },

  lightTitle: {
    color: "#3c2f2f",
    fontSize: 22,
    fontWeight: "500",
    margin: 5,
  },

  darkTitle: {
    color: "#fff4e6",
    fontSize: 22,
    fontWeight: "500",
    margin: 5,
  },

  defaultTextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.0)",
    borderRadius: 7,
    backgroundColor: "#f2dec4",
  },

  focusedTextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#3c2f2f",
    borderRadius: 7,
    backgroundColor: "#f2dec4",
  },
});
