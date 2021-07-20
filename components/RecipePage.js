import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  lightStyleheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  SafeAreaView,
  linking,
  Linking,
  Alert,
} from "react-native";
import uuid from "react-native-uuid";
import ImageOverlay from "react-native-image-overlay";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import lightStyle from "./RecipePage/RecipePage.style.light";
import darkStyle from "./RecipePage/RecipePage.style.dark";

import TopBar from "./RecipePage/TopBar";

export default function RecipePage({ route }) {
  const item = route.params["item"];
  const [currentIndex, setCurrentIndex] = useState(null);
  const number = Math.floor(Math.random() * 255);
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const colorScheme = useColorScheme();
  const themeStyle = isDark ? darkStyle : lightStyle;
  const navigation = useNavigation();

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  return (
    <View style={themeStyle.recipeBody}>
      <ImageOverlay
        source={{ uri: item.image }}
        title={item.label}
        containerStyle={{ width: "100%", height: 300 }}
        titleStyle={themeStyle.titleStyle}
      />
      <TopBar item={item} />
      <View style={themeStyle.container}>
        <View style={themeStyle.descriptionContainer}>
          <View style={themeStyle.descriptionItem}>
            <Icon
              name="time-outline"
              size={18}
              color={isDark ? "#be9b7b" : "#854442"}
              style={{ marginRight: 5, fontWeight: "500" }}
            />
            <Text style={themeStyle.descriptionText}>{item.mealType}</Text>
          </View>
          <View style={themeStyle.descriptionItem}>
            <Icon
              name="timer-outline"
              size={18}
              color={isDark ? "#be9b7b" : "#854442"}
              style={{ marginRight: 5, fontWeight: "500" }}
            />
            <Text style={themeStyle.descriptionText}>{item.totalTime} min</Text>
          </View>
          <View style={themeStyle.descriptionItem}>
            <Icon
              name="flag-outline"
              size={18}
              color={isDark ? "#be9b7b" : "#854442"}
              style={{ marginRight: 5, fontWeight: "500" }}
            />
            <Text style={themeStyle.descriptionText}>{item.cuisineType}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={themeStyle.sourceLink}
              onPress={() => {
                const supported = Linking.canOpenURL(item.url);
                if (supported) {
                  Linking.openURL(item.url);
                } else {
                  Alert.alert("I can't open this link :(");
                }
              }}
            >
              Source: {item.source}
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={themeStyle.ingredientsTitle}>Ingredients</Text>
            <ScrollView>
              {item.ingredients.map((data) => (
                <View key={uuid.v4()} style={themeStyle.ingredientsList}>
                  <Image
                    source={{ uri: data.image }}
                    style={{ width: 75, height: 75 }}
                  />
                  <View style={themeStyle.ingredientsItem}>
                    <Text style={themeStyle.ingredientsText}>{data.text}</Text>
                    <Text style={themeStyle.ingredienstCategoryText}>
                      {data.foodCategory}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
