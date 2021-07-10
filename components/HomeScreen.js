import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import RecipeCard from "./RecipeCard";
import uuid from "react-native-uuid";
import styles from "./HomeScreen.style";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [noResults, setNoResults] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  function SearchRecipes() {
    setIsLoading(true);
    try {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?q=${search}&app_id=c0b00d6c&app_key=47bba455165224ac52240341690bd577&type=public`
        )
        .then((res) => {
          console.log(res.data.count);
          setRecipes(res.data.hits);
          if (res.data.count === 0) {
            setNoResults(true);
          } else {
            setNoResults(false);
          }
        });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  function onFocusChange() {
    if (isFocused) {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Hello, John</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          onFocus={onFocusChange}
          onEndEditing={onFocusChange}
          onSubmitEditing={SearchRecipes}
          style={isFocused ? styles.focusedTextInput : styles.defaultTextInput}
          value={search}
          onChangeText={setSearch}
          clearButtonMode="while-editing"
        />
      </View>
      {noResults ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultText}>No Results</Text>
        </View>
      ) : (
        <ScrollView style={{ maxHeight: 500 }}>
          <View style={styles.cardContainer}>
            {recipes.map((data) => (
              <RecipeCard key={uuid.v4()} recipe={data.recipe} />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
