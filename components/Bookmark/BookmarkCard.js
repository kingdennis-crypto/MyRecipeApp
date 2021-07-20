import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  themeStyleheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import darkStyle from "./style.dark";
import lightStyle from "./style.light";

export default function BookmarkCard(props) {
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const colorScheme = useColorScheme();
  const themeStyle = isDark ? darkStyle : lightStyle;
  const navigation = useNavigation();

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  return (
    <View style={themeStyle.cardItem}>
      <View style={themeStyle.textItem}>
        <Text style={themeStyle.nameText}>{props.item.label}</Text>
        <Text style={themeStyle.typeText}>{props.item.mealType}</Text>
      </View>
      {/* <TouchableOpacity style={themeStyle.bookmarkItem}>
        <Icon name="bookmark-outline" size={32} color="#000" />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={themeStyle.chevronItem}
        onPress={() => navigation.navigate("RecipePage", { item: props.item })}
      >
        <Icon name="chevron-forward-outline" size={32} color="#3c2f2f" />
      </TouchableOpacity>
    </View>
  );
}
