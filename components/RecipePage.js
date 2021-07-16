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
} from "react-native";
import uuid from "react-native-uuid";
import ImageOverlay from "react-native-image-overlay";
import Icon from "react-native-vector-icons/Ionicons";

import lightStyle from "./RecipePage/RecipePage.style.light";
import darkStyle from "./RecipePage/RecipePage.style.dark";

export default function RecipePage({ route }) {
  const item = route.params["item"];
  const [currentIndex, setCurrentIndex] = useState(null);
  const number = Math.floor(Math.random() * 255);
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const colorScheme = useColorScheme();
  const themeStyle = isDark ? darkStyle : lightStyle;

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
      </View>
    </View>
  );
}
