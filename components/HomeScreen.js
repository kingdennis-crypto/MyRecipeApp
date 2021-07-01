import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import uuid from "react-native-uuid";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?q=${search}&app_id=421e758d&app_key=53eb91ce7193440e3ad590fabd2c1509&type=public`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits))
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Welcome Back</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={search}
          onChangeText={setSearch}
          clearButtonMode="while-editing"
        />
        <Button title="Press Me" onPress={getRecipes} />
        <ScrollView style={{ maxHeight: 200 }}>
          {recipes.map((data) => (
            <TouchableOpacity
              style={{ padding: 5 }}
              onPress={() => Alert.alert(data.recipe.label)}
            >
              <Text key={uuid.v4()}>{data.recipe.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    padding: 20,
  },

  textInput: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
});
