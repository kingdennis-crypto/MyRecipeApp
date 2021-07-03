import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

export default function RecipeCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate("Detail", { item: props.recipe })}
    >
      <Image
        source={{ uri: props.recipe.image }}
        style={{
          width: "100%",
          height: 80,
          borderRadius: 15,
        }}
      />
      <View style={styles.mealTypeContainer}>
        {props.recipe.mealType === undefined ? (
          <Text style={styles.mealTypeText}>No Meal Type</Text>
        ) : (
          <Text style={styles.mealTypeText}>{props.recipe.mealType}</Text>
        )}
      </View>
      <Text style={styles.recipeTitle}>{props.recipe.label}</Text>
      {props.recipe.cuisineType === undefined ? (
        <Text style={styles.mealTypeText}>No Cuisine Type</Text>
      ) : (
        <Text style={styles.cuisineTypeText}>{props.recipe.cuisineType}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    width: "45%",
    backgroundColor: "#FFF",
    margin: 5,
    borderRadius: 15,
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.84,
    elevation: 5,
  },

  recipeTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    margin: 3,
  },

  cuisineTypeText: {
    alignSelf: "center",
    fontSize: 12,
    padding: 3,
    borderRadius: 5,
  },

  mealTypeContainer: {
    backgroundColor: "rgb(132,181,45)",
    padding: 3,
    margin: 5,
    alignSelf: "flex-start",
    borderRadius: 3,
  },

  mealTypeText: {
    textAlign: "center",
    fontSize: 10,
    color: "rgba(255,255,255,0.8)",
  },
});
