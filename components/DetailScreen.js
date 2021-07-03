import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { WebView } from "react-native-webview";
import uuid from "react-native-uuid";

export default function DetailScreen({ navigation, route }) {
  const { item } = route.params;
  const recipeLink = item.url;

  console.log(item.yield);

  return (
    <View>
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 250 }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 60,
          left: 20,
          backgroundColor: "rgba(255,255,255,0.4)",
          padding: 5,
          borderRadius: 5,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/back.png")}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.label}</Text>
        <View style={styles.linkContainer}>
          <Text style={styles.linkName}>{item.source}</Text>
          <Text
            style={styles.linkBringMeThere}
            onPress={() => {
              const supported = Linking.canOpenURL(recipeLink);
              if (supported) {
                Linking.openURL(recipeLink);
              } else {
                Alert.alert(`I can't open this link: ${recipeLink}`);
              }
            }}
          >
            Bring me there
          </Text>
        </View>
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
          <View style={styles.detailsRow}>
            <View style={styles.detailContainer}>
              <Image
                source={require("../assets/DetailScreen/tinder.png")}
                style={styles.detailImage}
              />
              <Text style={styles.detailText}>
                {Math.ceil(item.calories)} kcal
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Image
                source={require("../assets/DetailScreen/weight-scale.png")}
                style={styles.detailImage}
              />
              <Text style={styles.detailText}>
                {Math.ceil(item.totalWeight)} gram
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Image
                source={require("../assets/DetailScreen/clock.png")}
                style={styles.detailImage}
              />
              <Text style={styles.detailText}>{item.totalTime} min</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            paddingHorizontal: 8,
            paddingBottom: 5,
          }}
        >
          Ingredients:
        </Text>
        <ScrollView style={{ maxHeight: 200 }} horizontal>
          {item.ingredients.map((data) => (
            <View key={uuid.v4()} style={styles.ingredientContainer}>
              <Image
                source={{ uri: data.image }}
                defaultSource={require("../assets/DetailScreen/no-photos.png")}
                style={{ width: 150, height: 150, borderRadius: 15 }}
              />
              <Text style={styles.ingredientText}>{data.text}</Text>
            </View>
          ))}
        </ScrollView>
        {/* <ScrollView style={{ maxHeight: 100 }}>
          {item.dietLabels.map((data) => (
            <Text>{data}</Text>
          ))}
          {item.cautions.map((data) => (
            <Text>{data}</Text>
          ))}
          {item.healthLabels.map((data) => (
            <Text>{data}</Text>
          ))}
        </ScrollView> */}
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

  ingredientContainer: {
    // backgroundColor: "rgba(0,0,0,0.5)",
    marginHorizontal: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },

  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    // marginVertical: 5,
  },

  detailContainer: {
    // backgroundColor: "rgba(0,0,0,0.3)",
    padding: 10,
    width: 90,
    alignItems: "center",
  },

  detailImage: {
    width: 32,
    height: 32,
  },

  detailText: {
    paddingVertical: 7,
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
    paddingHorizontal: 5,
  },

  linkContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    marginBottom: 7,
  },

  linkName: {
    fontSize: 16,
    paddingRight: 5,
    color: "rgb(168, 168, 168)",
    fontWeight: "500",
  },

  linkBringMeThere: {
    fontSize: 16,
    paddingHorizontal: 5,
    color: "rgb(106, 76, 199)",
    fontWeight: "bold",
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
