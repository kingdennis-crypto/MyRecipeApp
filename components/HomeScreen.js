import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  Switch,
} from "react-native";
import RecipeCard from "./RecipeCard";
import uuid from "react-native-uuid";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [noResults, setNoResults] = useState(true);

  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?q=${search}&app_id=421e758d&app_key=53eb91ce7193440e3ad590fabd2c1509&type=public`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.count !== 0) {
          setRecipes(data.hits);
          setNoResults(false);
        } else {
          setRecipes(data.hits);
          setNoResults(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Hello, John</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={search}
          onChangeText={setSearch}
          clearButtonMode="while-editing"
        />
      </View>
      <Button title="Get Recipes" onPress={getRecipes} />
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

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitleContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 42,
    fontWeight: "bold",
  },

  textInputContainer: {
    padding: 10,
  },

  textInput: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  noResultsContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },

  noResultText: {
    fontSize: 48,
  },
});
