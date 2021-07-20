import { faBaby } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function FAB() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom: 35,
        right: 35,
        backgroundColor: "#f2dec4",
        borderRadius: 25,
        width: 65,
        height: 65,
        zIndex: 10,
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      onPress={() => {
        navigation.navigate("BookmarkPage");
      }}
    >
      <Icon name="bookmark-outline" size={38} color="#000" />
    </TouchableOpacity>
  );
}
