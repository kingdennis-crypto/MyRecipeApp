import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  useColorScheme,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import darkStyle from "./style.dark";
import lightStyle from "./style.light";

import MealTypeModal from "./MealTypeModal";
import CuisineTypeModal from "./CuisineTypeModal";

export default function AddRecipePage() {
  const [isDark, setIsDark] = useState(colorScheme === "dark");
  const [isFocused, setIsFocused] = useState(false);
  const [label, setLabel] = useState("");

  const [min, setMin] = useState("");
  const [minIsFocused, setMinIsFocused] = useState(false);

  const [mealTypeModal, setMealTypeModal] = useState(false);
  const [mealTypeTitle, setMealTypeTitle] = useState("Meal Type");

  const [cuisineTypeModal, setCuisineTypeModal] = useState(false);
  const [cuisineTypeTitle, setCuisineTypeTitle] = useState("Cuisine Type");

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const themeStyle = isDark ? darkStyle : lightStyle;

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  return (
    <SafeAreaView style={themeStyle.body}>
      <MealTypeModal
        isVisible={mealTypeModal}
        setIsVisible={setMealTypeModal}
        setTitle={setMealTypeTitle}
      />
      <CuisineTypeModal
        isVisible={cuisineTypeModal}
        setIsVisible={setCuisineTypeModal}
        setTitle={setCuisineTypeTitle}
      />
      <View
        style={{
          height: "10%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: "#f2dec4",
            borderRadius: 7,
            marginLeft: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back-outline" size={28} color="#3c2f2f" />
        </TouchableOpacity>
      </View>
      <Text>Label</Text>
      <TextInput
        onFocus={() => setIsFocused(!isFocused)}
        onEndEditing={() => setIsFocused(!isFocused)}
        style={
          isFocused ? themeStyle.focusedTextInput : themeStyle.textInputStyle
        }
        onChangeText={setLabel}
        value={label}
        placeholder="Enter your name..."
        placeholderTextColor="#4b3832"
        clearButtonMode="while-editing"
      />
      <Text>Minutes</Text>
      <TextInput
        onFocus={() => setMinIsFocused(!minIsFocused)}
        onEndEditing={() => setMinIsFocused(!minIsFocused)}
        style={
          minIsFocused ? themeStyle.focusedTextInput : themeStyle.textInputStyle
        }
        onChangeText={setMin}
        value={min}
        placeholder="Enter the preparation time..."
        placeholderTextColor="#4b3832"
        clearButtonMode="while-editing"
        keyboardType="number-pad"
      />
      <Button title={mealTypeTitle} onPress={() => setMealTypeModal(true)} />
      <Pressable
        style={{
          padding: 5,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: 7,
          margin: 10,
        }}
      >
        <Button
          title={cuisineTypeTitle}
          onPress={() => setCuisineTypeModal(true)}
        />
      </Pressable>

      <View style={{ zIndex: 1 }}>
        <Button title="Press Me" />
      </View>
    </SafeAreaView>
  );
}
