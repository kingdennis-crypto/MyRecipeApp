import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TopBar(props) {
  const navigation = useNavigation();

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    checkBookmark();
  }, []);

  async function checkBookmark() {
    var text = props.item.label.replace(/\s+/g, "-").toLowerCase();

    try {
      const value = await AsyncStorage.getItem(`@Favourite:${text}`);
      if (value !== null) {
        setIsBookmarked(true);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function setBookmark() {
    var text = props.item.label.replace(/\s+/g, "-").toLowerCase();

    try {
      if (isBookmarked) {
        await AsyncStorage.removeItem(`@Favourite:${text}`);
      } else {
        await AsyncStorage.setItem(
          `@Favourite:${text}`,
          JSON.stringify(props.item)
        );
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsBookmarked(!isBookmarked);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-back-outline" size={32} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookmarkContainer} onPress={setBookmark}>
        {isBookmarked ? (
          <Icon name="bookmark" size={32} color="#000" />
        ) : (
          <Icon name="bookmark-outline" size={32} color="#000" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 55,
    width: "100%",
    paddingHorizontal: "5%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  backContainer: {
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 10,
    borderRadius: 7,
  },

  bookmarkContainer: {
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 10,
    borderRadius: 7,
  },
});
