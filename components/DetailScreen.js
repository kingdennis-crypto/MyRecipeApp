import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import uuid from "react-native-uuid";

export default function DetailScreen({ route }) {
  const { item } = route.params;
  console.log(item.dishType);
  return (
    <View>
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 250 }}
      />
      <View style={styles.textContainer}>
        <View style={styles.topTextContainer}>
          {item.dishType === undefined ? (
            <Text style={styles.courseText}>No Dishtype</Text>
          ) : (
            <Text style={styles.courseText}>{item.dishType}</Text>
          )}
          {item.mealType === undefined ? (
            <Text style={styles.mealTypeText}>No Mealtype</Text>
          ) : (
            <Text style={styles.mealTypeText}>{item.mealType}</Text>
          )}
          {item.cuisineType === undefined ? (
            <Text style={styles.cuisineTypeText}>No cuisineType</Text>
          ) : (
            <Text style={styles.cuisineTypeText}>{item.cuisineType}</Text>
          )}
          {item.totalTime === 0 ? (
            <Text style={styles.totalTimeText}>No Time Given</Text>
          ) : (
            <Text style={styles.totalTimeText}>Time: {item.totalTime} Min</Text>
          )}
        </View>
        <Text style={styles.titleText}>{item.label}</Text>
        <ScrollView style={{ maxHeight: 300 }}>
          {item.dietLabels.map((data) => (
            <Text>{data}</Text>
          ))}
          {item.cautions.map((data) => (
            <Text>{data}</Text>
          ))}
          {item.healthLabels.map((data) => (
            <Text>{data}</Text>
          ))}
          {/* <ScrollView style={{ maxHeight: 400 }}> */}
          {item.ingredients.map((data) => (
            <View key={uuid.v4()} style={styles.itemList}>
              <Image
                source={{ uri: data.image }}
                style={{ width: 50, height: 50 }}
              />
              <Text style={styles.ingredientText}>{data.text}</Text>
            </View>
          ))}
          {/* </ScrollView> */}
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
    fontSize: 28,
    fontWeight: "bold",
    padding: 5,
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

  topTextContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 5,
  },

  courseText: {
    borderRadius: 5,
    padding: 5,
    alignSelf: "flex-start",
    backgroundColor: "rgb(231,246,237)",
    color: "rgb(54,159,108)",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 5,
  },

  mealTypeText: {
    borderRadius: 5,
    padding: 5,
    alignSelf: "flex-start",
    backgroundColor: "rgb(231,238,246)",
    color: "rgb(54,107,159)",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 5,
  },

  cuisineTypeText: {
    borderRadius: 5,
    padding: 5,
    alignSelf: "flex-start",
    backgroundColor: "rgb(246,231,231)",
    color: "rgb(159,54,54)",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 5,
  },

  totalTimeText: {
    borderRadius: 5,
    padding: 5,
    alignSelf: "flex-start",
    backgroundColor: "rgb(239,231,246)",
    color: "rgb(103,54,159)",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 5,
  },
});
