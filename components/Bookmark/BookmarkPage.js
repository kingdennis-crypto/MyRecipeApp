import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import BookmarkCard from "./BookmarkCard";

export default function BookmarkPage() {
  return (
    <SafeAreaView>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Bookmark</Text>
      </View>
      <BookmarkCard />
      <BookmarkCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    height: "25%",
  },

  title: {
    fontSize: 34,
    fontWeight: "600",
    padding: 15,
  },
});
