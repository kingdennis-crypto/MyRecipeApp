import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BookmarkCard from "./BookmarkCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import Icon from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";

import darkStyle from "./style.dark";
import lightStyle from "./style.light";

export default function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState([]);
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const colorScheme = useColorScheme();
  const themeStyle = isDark ? darkStyle : lightStyle;
  const navigation = useNavigation();

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  useEffect(() => {
    getAllFavourites();
  }, []);

  async function getAllKeys() {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      console.log(keys);
    } catch (e) {
      console.log(e);
    }
  }

  async function clearAllKeys() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(e);
    }
  }

  async function getAllFavourites() {
    let keys = [];
    let arr = [];
    setBookmarks([]);

    try {
      keys = await AsyncStorage.getAllKeys();

      for (var i = 0; i < keys.length; i++) {
        if (keys[i].indexOf("@Favourite") !== -1) {
          arr.push(keys[i]);
        }
      }

      for (var i = 0; i < arr.length; i++) {
        let item = await AsyncStorage.getItem(arr[i]);
        setBookmarks((bookmarks) => [...bookmarks, JSON.parse(item)]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SafeAreaView style={themeStyle.bodyContainer}>
      <View style={themeStyle.titleSection}>
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: "#f2dec4",
            borderRadius: 7,
            marginLeft: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back-outline" size={28} color="#3c2f2f" />
        </TouchableOpacity>
        <Text style={themeStyle.title}>Bookmark</Text>
      </View>
      {/* <Button title="Get All Keys" onPress={getAllKeys} /> */}
      {/* <Button title="Clear All Keys" onPress={clearAllKeys} /> */}
      <ScrollView>
        {bookmarks.map((data) => (
          <BookmarkCard item={data} key={uuid.v4()} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
