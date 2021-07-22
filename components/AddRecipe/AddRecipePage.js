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
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import uuid from "react-native-uuid";

import darkStyle from "./style.dark";
import lightStyle from "./style.light";

import MealTypeModal from "./MealTypeModal";
import CuisineTypeModal from "./CuisineTypeModal";
import ConfirmationModal from "./ConfirmationModal";

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

  const [confirmModal, setConfirmModal] = useState(false);
  const [recipeItem, setRecipeItem] = useState([]);

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const themeStyle = isDark ? darkStyle : lightStyle;

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  async function addToRecipeItem() {
    setRecipeItem([]);
    try {
      setRecipeItem([
        {
          label: label,
          time: min,
          mealtype: mealTypeTitle.toLowerCase(),
          cuisinetype: cuisineTypeTitle.toLowerCase(),
        },
      ]);
    } catch (e) {
      console.log(e);
    } finally {
      setConfirmModal(true);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={themeStyle.body}
    >
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
      <ConfirmationModal
        isVisible={confirmModal}
        item={recipeItem}
        setIsVisible={setConfirmModal}
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
      <View style={themeStyle.textContainer}>
        <Text
          style={[
            themeStyle.label,
            isDark ? { color: "#fff4e6" } : { color: "#3c2f2f" },
          ]}
        >
          Label
        </Text>
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
      </View>
      <View style={themeStyle.textContainer}>
        <Text
          style={[
            themeStyle.label,
            isDark ? { color: "#fff4e6" } : { color: "#3c2f2f" },
          ]}
        >
          Minutes
        </Text>
        <TextInput
          onFocus={() => setMinIsFocused(!minIsFocused)}
          onEndEditing={() => setMinIsFocused(!minIsFocused)}
          style={
            minIsFocused
              ? themeStyle.focusedTextInput
              : themeStyle.textInputStyle
          }
          onChangeText={setMin}
          value={min}
          placeholder="Enter the preparation time..."
          placeholderTextColor="#4b3832"
          clearButtonMode="while-editing"
          keyboardType="number-pad"
        />
      </View>
      <View style={themeStyle.boxContainer}>
        <View style={themeStyle.boxItem}>
          <Text style={themeStyle.boxText}>Mealtype</Text>
          <Pressable style={themeStyle.boxButton}>
            <Button
              title={mealTypeTitle}
              onPress={() => setMealTypeModal(true)}
              color="#3c2f2f"
            />
          </Pressable>
        </View>
        <View style={themeStyle.boxItem}>
          <Text style={themeStyle.boxText}>Cuisinetype</Text>
          <Pressable style={themeStyle.boxButton}>
            <Button
              title={cuisineTypeTitle}
              onPress={() => setCuisineTypeModal(true)}
              color="#3c2f2f"
            />
          </Pressable>
        </View>
      </View>
      <View style={themeStyle.saveButtonContainer}>
        <Pressable style={themeStyle.saveButtonItem}>
          <Button
            title="Save Item"
            color={isDark ? "#3c2f2f" : "#f2dec4"}
            onPress={addToRecipeItem}
          />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
