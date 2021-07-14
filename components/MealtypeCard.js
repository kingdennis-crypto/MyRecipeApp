import React from "react";
import { TouchableOpacity, Text, useColorScheme } from "react-native";
import styles from "./HomeScreen.style.light";
import darkStyles from "./HomeScreen.style.dark";

export default function MealtypeCard(props) {
  const [isDark, setIsDark] = React.useState(colorScheme === "dark");
  const colorScheme = useColorScheme();
  const themeStyle = isDark ? darkStyles : styles;

  React.useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  return (
    <TouchableOpacity onPress={() => props.changeMealType(props.name)}>
      <Text
        style={
          props.mealTypes === props.name
            ? themeStyle.focusedMealType
            : themeStyle.normalMealType
        }
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}
