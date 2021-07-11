import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import uuid from "react-native-uuid";

export default function RecipePage({ route }) {
  const item = route.params["item"];
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 250 }}
        source={{ uri: item.image }}
      />
      <View style={styles.textContainer}>
        <View style={styles.textContainer2}>
          <Text style={styles.titleText}>{item.label}</Text>
          <Text>{item.mealType}</Text>
          <Text>{item.totalTime} min</Text>
          <Text>{Math.floor(item.totalWeight)} gram</Text>
          <Text>{Math.floor(item.calories)} kcal</Text>
        </View>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          {item.ingredientLines.map((item) => (
            <View key={uuid.v4()}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    height: "100%",
    width: "100%",
  },

  textContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: -50,
  },

  textContainer2: {
    marginBottom: 10,

    backgroundColor: "#FFF",
    width: "90%",
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  titleText: {
    fontSize: 22,
    fontWeight: "500",
  },

  ingredientsContainer: {
    marginVertical: 10,

    backgroundColor: "#FFF",
    width: "90%",
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
});
