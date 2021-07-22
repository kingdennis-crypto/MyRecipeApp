import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as SplashScreen from "expo-splash-screen";

import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailScreen/DetailScreen";
import RecipePage from "./components/RecipePage";
import BookmarkPage from "./components/Bookmark/BookmarkPage";
import SetupScreen from "./components/SetupScreen";
import AddRecipePage from "./components/AddRecipe/AddRecipePage";

// #4b3832
// #854442
// #fff4e6
// #3c2f2f
// #be9b7b

export default function App() {
  const Stack = createStackNavigator();
  const [firstTime, setFirstTime] = useState(true);
  const [appIsReady, setAppIsReady] = useState(false);

  async function checkSetupScreen() {
    try {
      const value = await AsyncStorage.getItem("@FirstTime");
      console.log(value);
      if (value === "yes") {
        setFirstTime(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await checkSetupScreen();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {firstTime && (
          <Stack.Screen
            name="FirstTime"
            component={SetupScreen}
            options={{ headerShown: false }}
          />
        )}

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipePage"
          component={RecipePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookmarkPage"
          component={BookmarkPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddRecipePage"
          component={AddRecipePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
