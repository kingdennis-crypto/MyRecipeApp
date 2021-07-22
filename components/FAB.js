import { faBaby } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function FAB() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 35,
        right: 35,
        backgroundColor: "#f2dec4",
        borderRadius: 25,
        width: 125,
        height: 65,
        zIndex: 10,
        justifyContent: "space-around",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddRecipePage");
        }}
      >
        <Icon name="add-outline" size={38} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BookmarkPage");
        }}
      >
        <Icon name="bookmark-outline" size={38} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
