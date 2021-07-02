import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

export default function RecipeCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItem}
      key={uuid.v4()}
      onPress={() => navigation.navigate("Detail", { item: props.recipe })}
    >
      <Image
        key={uuid.v4()}
        source={{ uri: props.recipe.image }}
        style={{ width: "100%", height: "70%" }}
      />
      <Text key={uuid.v4()} style={styles.recipeTitle}>
        {props.recipe.label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    width: "45%",
    backgroundColor: "#FFF",
    margin: 5,
    borderRadius: 5,
    height: 150,

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
    padding: 5,
  },
});
