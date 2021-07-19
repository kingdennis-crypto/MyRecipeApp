import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AppearanceProvider } from "react-native-appearance";

import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailScreen/DetailScreen";
import RecipePage from "./components/RecipePage";
import BookmarkPage from "./components/Bookmark/BookmarkPage";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <AppearanceProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
