import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: "#fff4e6",
  },

  titleSection: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "600",
    padding: 15,
    color: "#3c2f2f",
  },

  cardItem: {
    alignSelf: "stretch",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 7,
    backgroundColor: "#f2dec4",
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  nameText: {
    fontSize: 14,
    fontWeight: "500",
  },

  typeText: {
    fontWeight: "300",
  },

  textItem: {
    flex: 1,
    marginHorizontal: 5,
  },

  bookmarkItem: {
    width: 50,
    marginHorizontal: 5,
    alignItems: "center",
    padding: 5,
    borderRadius: 7,
  },

  chevronItem: {
    width: 50,
    backgroundColor: "#fff4e6",
    marginHorizontal: 5,
    alignItems: "center",
    padding: 5,
    borderRadius: 7,
  },
});
