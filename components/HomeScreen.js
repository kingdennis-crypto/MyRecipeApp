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

  function changeColor() {
    console.log("NO");
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
      <ScrollView
        contentContainerStyle={newStyles.mealTypeContainer}
        horizontal
      >
        <TouchableOpacity onPress={() => setMeal("breakfast")}>
          <Text
            style={
              mealTypes === "breakfast"
                ? newStyles.focusedMealType
                : newStyles.normalMealType
            }
          >
            Breakfast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMeal("lunch")}>
          <Text
            style={
              mealTypes === "lunch"
                ? newStyles.focusedMealType
                : newStyles.normalMealType
            }
          >
            Lunch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMeal("dinner")}>
          <Text
            style={
              mealTypes === "dinner"
                ? newStyles.focusedMealType
                : newStyles.normalMealType
            }
          >
            Dinner
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMeal("snack")}>
          <Text
            style={
              mealTypes === "snack"
                ? newStyles.focusedMealType
                : newStyles.normalMealType
            }
          >
            Snack
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMeal("teatime")}>
          <Text
            style={
              mealTypes === "teatime"
                ? newStyles.focusedMealType
                : newStyles.normalMealType
            }
          >
            Teatime
          </Text>
        </TouchableOpacity>
      </ScrollView>
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

  focusedMealType: {
    margin: 5,
    padding: 5,
    backgroundColor: "rgb(54,107,159)",
    color: "rgb(231,238,246)",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  normalMealType: {
    margin: 5,
    padding: 5,
    backgroundColor: "rgb(231,238,246)",
    color: "rgb(54,107,159)",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  searchType: {
    marginVertical: 3,
    padding: 5,
    backgroundColor: "rgb(231,238,246)",
    color: "rgb(231,238,246)",
  },

  focusedSearchType: {
    margin: 5,
    padding: 5,
    backgroundColor: "rgb(54,107,159)",
    color: "rgb(231,238,246)",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
