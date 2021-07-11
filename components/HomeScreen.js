import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RecipeCard from "./RecipeCard";
import uuid from "react-native-uuid";
import styles from "./HomeScreen.style";
import axios from "axios";
import MealtypeCard from "./MealtypeCard";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [noResults, setNoResults] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [mealTypes, setMealTypes] = useState("");
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
        setRecipeCount(res.data.count);
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
    setMealTypes(mealtype);
    SearchRecipes();

    // if (recipeCount > 0) {
    //   console.log("Already searched");
    // } else {
    //   console.log("Not already searched");
    // }
    // if (mealTypes !== mealtype) {
    //   setMealTypes(mealtype);
    // }
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
      <ScrollView contentContainerStyle={styles.mealTypeContainer} horizontal>
        <MealtypeCard
          mealTypes={mealTypes}
          name="breakfast"
          setMeal={setMeal}
        />
        <MealtypeCard mealTypes={mealTypes} name="lunch" setMeal={setMeal} />
        <MealtypeCard mealTypes={mealTypes} name="dinner" setMeal={setMeal} />
        <MealtypeCard mealTypes={mealTypes} name="snack" setMeal={setMeal} />
        <MealtypeCard mealTypes={mealTypes} name="teatime" setMeal={setMeal} />
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
