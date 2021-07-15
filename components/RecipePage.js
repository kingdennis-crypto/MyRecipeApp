import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  lightStyleheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  SafeAreaView,
} from "react-native";
import { color, Transition, Transitioning } from "react-native-reanimated";
import { Appearance } from "react-native-appearance";
import uuid from "react-native-uuid";

import lightStyle from "./RecipePage/RecipePage.style.light";
import darkStyle from "./RecipePage/RecipePage.style.dark";

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
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const colorScheme = useColorScheme();
  const themeStyle = isDark ? darkStyle : lightStyle;

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  return (
    <View style={themeStyle.recipeBody}>
      <Image style={themeStyle.recipeImage} source={{ uri: item.image }} />
      <View style={themeStyle.titleContainer}>
        <Text style={themeStyle.titleText}>{item.label}</Text>
      </View>
    </View>
    // <SafeAreaView style={themeStyle.container}>
    //   <Image
    //     style={{ width: "100%", height: 250 }}
    //     source={{ uri: item.image }}
    //   />
    //   <View style={themeStyle.textContainer}>
    //     <View style={themeStyle.textContainer2}>
    //       <Text style={lightStyle.titleText}>{item.label}</Text>
    //       <Text>{item.mealType}</Text>
    //       <Text>{item.totalTime} min</Text>
    //       <Text>{Math.floor(item.totalWeight)} gram</Text>
    //       <Text>{Math.floor(item.calories)} kcal</Text>
    //     </View>
    //     <View style={lightStyle.ingredientsContainer}>
    //       <Text style={lightStyle.ingredientsTitle}>Ingredients</Text>

    //       <Transitioning.View ref={ref} transition={transition}>
    //         {item.ingredients.map((item, index) => (
    //           <TouchableOpacity
    //             onPress={() => {
    //               ref.current.animateNextTransition();
    //               setCurrentIndex(index === currentIndex ? null : index);
    //             }}
    //             style={{ marginVertical: 10 }}
    //             key={uuid.v4()}
    //           >
    //             <Text>{item.text}</Text>
    //             {index === currentIndex && (
    //               <View
    //                 style={{
    //                   backgroundColor: `rgb(${number}, ${number}, ${number})`,
    //                 }}
    //               >
    //                 <Text>{item.foodCategory}</Text>
    //                 <Text>{item.weight}</Text>
    //               </View>
    //             )}
    //           </TouchableOpacity>
    //         ))}
    //       </Transitioning.View>
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
}
