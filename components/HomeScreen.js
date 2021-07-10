import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import RecipeCard from "./RecipeCard";
import uuid from "react-native-uuid";
import styles from "./HomeScreen.style";
import axios from "axios";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [noResults, setNoResults] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [mealTypes, setMealTypes] = useState("");
  const [value, setValue] = useState(0);
  const [recipeUrl, setRecipeUrl] = useState(
    "https://api.edamam.com/api/recipes/v2?app_id=c0b00d6c&app_key=47bba455165224ac52240341690bd577&type=public"
  );

  function SearchRecipes() {
    console.log(recipeUrl);
    if (mealTypes === "") {
      setRecipeUrl(
        `https://api.edamam.com/api/recipes/v2?q=${search}&app_id=c0b00d6c&app_key=47bba455165224ac52240341690bd577&type=public`
      );
    } else {
      setRecipeUrl(
        `https://api.edamam.com/api/recipes/v2?q=${search}&mealType=${mealTypes}&app_id=c0b00d6c&app_key=47bba455165224ac52240341690bd577&type=public`
      );
    }

    try {
      axios.get(recipeUrl).then((res) => {
        setRecipes(res.data.hits);
        if (res.data.count === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  function onFocusChange() {
    if (isFocused) {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  }

  function setMeal(mealtype) {
    if (mealTypes !== mealtype) {
      setMealTypes(mealtype);
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
      <View style={newStyles.mealTypeContainer}>
        <TouchableOpacity
          style={
            mealTypes === "breakfast"
              ? newStyles.focusedSearchType
              : newStyles.searchType
          }
          onPress={() => setMeal("breakfast")}
        >
          <Text>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            mealTypes === "lunch"
              ? newStyles.focusedSearchType
              : newStyles.searchType
          }
          onPress={() => setMeal("lunch")}
        >
          <Text>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            mealTypes === "dinner"
              ? newStyles.focusedSearchType
              : newStyles.searchType
          }
          onPress={() => setMeal("dinner")}
        >
          <Text>Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            mealTypes === "snack"
              ? newStyles.focusedSearchType
              : newStyles.searchType
          }
          onPress={() => setMeal("snack")}
        >
          <Text>Snack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            mealTypes === "teatime"
              ? newStyles.focusedSearchType
              : newStyles.searchType
          }
          onPress={() => setMeal("teatime")}
        >
          <Text>Teatime</Text>
        </TouchableOpacity>
      </View>
      {noResults ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultText}>No Results</Text>
        </View>
      ) : (
        <ScrollView
          style={{ maxHeight: "80%" }}
          contentContainerStyle={styles.cardContainer}
        >
          {recipes.map((data) => (
            <RecipeCard key={uuid.v4()} recipe={data.recipe} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const newStyles = StyleSheet.create({
  mealTypeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },

  searchType: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
  },

  focusedSearchType: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
