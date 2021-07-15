import { StyleSheet } from "react-native";

export default StyleSheet.create({
  recipeBody: {
    flex: 1,
    backgroundColor: "#fff4e6",
  },

  recipeImage: {
    alignSelf: "stretch",
    height: 250,
  },

  titleContainer: {
    padding: 10,
    marginBottom: 20,
  },

  titleText: {
    fontSize: 66,
    fontWeight: "500",
    color: "#3c2f2f",
  },

  container: {
    backgroundColor: "#fff4e6",
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
    borderRadius: 7,

    backgroundColor: "#f2dec4",
    width: "95%",
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
    color: "#3c2f2f",
  },

  ingredientsContainer: {
    marginVertical: 10,

    backgroundColor: "#f2dec4",
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
    color: "#3c2f2f",
  },
});
