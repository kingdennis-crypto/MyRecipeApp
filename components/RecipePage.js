import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";
import uuid from "react-native-uuid";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function RecipePage({ route }) {
  const item = route.params["item"];
  const ref = React.useRef();
  const [currentIndex, setCurrentIndex] = useState(null);
  const number = Math.floor(Math.random() * 255);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 250 }}
        source={{ uri: item.image }}
      />
      <View style={styles.textContainer}>
        <View style={styles.textContainer2}>
          <Text style={styles.titleText}>{item.label}</Text>
          <Text>{item.mealType}</Text>
          <Text>{item.totalTime} min</Text>
          <Text>{Math.floor(item.totalWeight)} gram</Text>
          <Text>{Math.floor(item.calories)} kcal</Text>
        </View>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>

          <Transitioning.View ref={ref} transition={transition}>
            {item.ingredients.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                style={{ marginVertical: 10 }}
                key={uuid.v4()}
              >
                <Text>{item.text}</Text>
                {index === currentIndex && (
                  <View
                    style={{
                      backgroundColor: `rgb(${number}, ${number}, ${number})`,
                    }}
                  >
                    <Text>{item.foodCategory}</Text>
                    <Text>{item.weight}</Text>
                    {/* <Image
                      source={{ uri: item.image }}
                      style={{ width: 100, height: 100, borderRadius: 7 }}
                    /> */}
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </Transitioning.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    lineHeight: 20 * 1.5,
  },

  container: {
    backgroundColor: "#f5f5f5",
    height: "100%",
    width: "100%",
  },

  textContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: -50,
  },

  textContainer2: {
    marginBottom: 10,

    backgroundColor: "#FFF",
    width: "90%",
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  titleText: {
    fontSize: 22,
    fontWeight: "500",
  },

  ingredientsContainer: {
    marginVertical: 10,

    backgroundColor: "#FFF",
    width: "90%",
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
});
