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
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import NameModal from "./NameModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

// DONT FORGET USEFOCUSEFFECT TO TOGGLE THE NAME GET FUNCTION WHEN THE VIEW IS CHANGED

export default function HomeScreen() {
  const [recipes, setRecipes] = useState([]);
  const [myValue, setMyValue] = useState(0);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [noResults, setNoResults] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [mealTypes, setMealTypes] = useState("");
  const [recipeUrl, setRecipeUrl] = useState(
    `https://api.edamam.com/api/recipes/v2?q=${search}&app_id=c0b00d6c&app_key=47bba455165224ac52240341690bd577&type=public`
  );

  const navigation = useNavigation();

  useEffect(() => {
    getName();
  }, [myValue]);

  async function getName() {
    try {
      const value = await AsyncStorage.getItem("Name");
      if (value !== null) {
        setName(value);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function SearchRecipes() {
    setRecipeUrl(
      `https://api.edamam.com/api/recipes/v2?q=${search}&app_id=c0b00d6c&app_key=47bba455165224ac52240341690bd577&type=public`
    );
    console.log(recipeUrl);
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

  function changeMealType(mealtype) {
    if (mealTypes === mealtype) {
      setMealTypes("");
    } else {
      setMealTypes(mealtype);
      setRecipeUrl(
        `https://api.edamam.com/api/recipes/v2?q=${search}&mealType=${mealtype}&app_id=c0b00d6c&app_key=47bba455165224ac52240341690bd577&type=public`
      );
    }
  }

  function changeSearch() {
    console.log(search);
    console.log(recipeUrl);
    try {
      axios
        .get(recipeUrl)
        .then((res) => {
          setRecipes(res.data.hits);
          if (res.data.count === 0) {
            setNoResults(true);
          } else {
            setNoResults(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    } finally {
      console.log("End");
    }
  }

  useEffect(() => {
    console.log(mealTypes);
    SearchRecipes();
  }, [mealTypes]);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent={true} />
      <NameModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
        value={myValue}
        setValue={setMyValue}
        name={name}
      />
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Hello, {name}</Text>
        <TouchableOpacity
          style={{ justifyContent: "flex-end" }}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="ellipsis-horizontal-circle" size={38} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          onFocus={onFocusChange}
          onEndEditing={onFocusChange}
          onSubmitEditing={changeSearch}
          style={isFocused ? styles.focusedTextInput : styles.defaultTextInput}
          value={search}
          onChangeText={(text) => setSearch(text)}
          clearButtonMode="while-editing"
        />
      </View>
      <ScrollView contentContainerStyle={styles.mealTypeContainer} horizontal>
        <MealtypeCard
          mealTypes={mealTypes}
          name="breakfast"
          changeMealType={changeMealType}
        />
        <MealtypeCard
          mealTypes={mealTypes}
          name="lunch"
          changeMealType={changeMealType}
        />
        <MealtypeCard
          mealTypes={mealTypes}
          name="dinner"
          changeMealType={changeMealType}
        />
        <MealtypeCard
          mealTypes={mealTypes}
          name="snack"
          changeMealType={changeMealType}
        />
        <MealtypeCard
          mealTypes={mealTypes}
          name="teatime"
          changeMealType={changeMealType}
        />
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
