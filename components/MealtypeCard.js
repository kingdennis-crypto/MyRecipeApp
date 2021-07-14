import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./HomeScreen.style.light";

export default function MealtypeCard(props) {
  return (
    <TouchableOpacity onPress={() => props.changeMealType(props.name)}>
      <Text
        style={
          props.mealTypes === props.name
            ? styles.focusedMealType
            : styles.normalMealType
        }
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}
