import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function DetailScreen({ route }) {
  const { item } = route.params;
  console.log(item.label);
  console.log(item.ingredients);
  return (
    <View>
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 300 }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.label}</Text>
        <Text>{item.dishType}</Text>
        <ScrollView style={{ maxHeight: 300 }}>
          {item.ingredients.map((data) => (
            <View style={styles.itemList}>
              <Image
                source={{ uri: data.image }}
                style={{ width: 50, height: 50 }}
              />
              <Text style={styles.ingredientText}>{data.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    marginTop: -20,
    padding: 20,
    backgroundColor: "#FFF",
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 10,

    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowColor: "#000",
    elevation: 4,
    shadowOpacity: 0.5,
  },

  titleText: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "400",
  },

  itemList: {
    flexDirection: "row",
    borderWidth: 1,
    margin: 3,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#FFF",

    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#000",
    elevation: 4,
    shadowOpacity: 0.2,
  },

  ingredientText: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
  },
});
