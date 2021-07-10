import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  Alert,
  TouchableOpacity,
} from "react-native";
import styles from "./DetailScreen.style.js";
import uuid from "react-native-uuid";

export default function DetailScreen({ navigation, route }) {
  const { item } = route.params;
  const recipeLink = item.url;

  const [bookmarked, setBookmarked] = useState(false);

  const [emptyBookmark, setEmptyBookmark] = useState(
    require("../../assets/DetailScreen/bookmark-empty.png")
  );

  const [filledBookmark, setFilledBookmark] = useState(
    require("../../assets/DetailScreen/bookmark-full.png")
  );

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
          backgroundColor: "rgba(255,255,255,0.6)",
          padding: 5,
          borderRadius: 5,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../assets/back.png")}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 60,
          right: 20,
          backgroundColor: "rgba(255,255,255,0.6)",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Image
          source={bookmarked ? filledBookmark : emptyBookmark}
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
                source={require("../../assets/DetailScreen/tinder.png")}
                style={styles.detailImage}
              />
              <Text style={styles.detailText}>
                {Math.ceil(item.calories)} kcal
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Image
                source={require("../../assets/DetailScreen/weight-scale.png")}
                style={styles.detailImage}
              />
              <Text style={styles.detailText}>
                {Math.ceil(item.totalWeight)} gram
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Image
                source={require("../../assets/DetailScreen/clock.png")}
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
                defaultSource={require("../../assets/DetailScreen/no-photos.png")}
                style={{ width: 150, height: 150, borderRadius: 15 }}
              />
              <Text style={styles.ingredientText}>{data.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
