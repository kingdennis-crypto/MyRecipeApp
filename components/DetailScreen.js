import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function DetailScreen({ route }) {
  const { item } = route.params;
  console.log(item.label);
  return (
    <View>
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 300 }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.label}</Text>
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
});
