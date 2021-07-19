import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function BookmarkCard() {
  return (
    <View style={styles.container}>
      <View style={styles.textItem}>
        <Text style={styles.nameText}>Title</Text>
        <Text style={styles.typeText}>Lunch</Text>
      </View>
      <TouchableOpacity style={styles.bookmarkItem}>
        <Icon name="bookmark-outline" size={32} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.chevronItem}>
        <Icon name="chevron-forward-outline" size={32} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 7,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  nameText: {
    fontSize: 18,
    fontWeight: "500",
  },

  typeText: {
    fontWeight: "300",
  },

  textItem: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginHorizontal: 5,
  },

  bookmarkItem: {
    width: 50,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginHorizontal: 5,
    alignItems: "center",
    padding: 5,
    borderRadius: 7,
  },

  chevronItem: {
    width: 50,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginHorizontal: 5,
    alignItems: "center",
    padding: 5,
    borderRadius: 7,
  },
});
