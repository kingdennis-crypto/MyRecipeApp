import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import uuid from "react-native-uuid";

export default function RecipeCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate("Detail", { item: props.recipe })}
    >
      <Image source={{ uri: props.recipe.image }} style={styles.cardImage} />
      <View style={styles.textContainer}>
        {props.recipe.label.length > 15 ? (
          <Text>{props.recipe.label.substring(0, 15)}...</Text>
        ) : (
          <Text>{props.recipe.label}</Text>
        )}
        <View style={styles.detailContainer}>
          <Ionicons name="time-outline" size={14} color="#000" />
          <Text style={{ marginLeft: 3 }}>{props.recipe.totalTime} min</Text>
        </View>
        <View style={styles.detailContainer}>
          <Ionicons name="flame-outline" size={14} color="#000" />
          <Text style={{ marginLeft: 3 }}>
            {Math.floor(props.recipe.calories)} kcal
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    width: "45%",
    height: 300,
    backgroundColor: "#FFF",
    margin: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.84,
    elevation: 5,
  },

  cardImage: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    position: "absolute",
    bottom: 7,
    left: 7,
    right: 7,
    backgroundColor: "rgb(255,255,255)",
    padding: 7,

    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    elevation: 5,
  },

  detailContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
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
    position: "absolute",
    top: 5,
    left: 5,
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
