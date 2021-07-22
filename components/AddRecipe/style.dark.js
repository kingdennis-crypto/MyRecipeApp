import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#3c2f2f",
  },

  textInputStyle: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.0)",
    borderRadius: 7,
    backgroundColor: "#f2dec4",
  },

  focusedTextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#851e3e",
    borderRadius: 7,
    backgroundColor: "#f2dec4",
  },

  label: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  },

  textContainer: {
    padding: 10,
  },

  boxContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },

  boxItem: {
    flexDirection: "column",
    flex: 1,
    padding: 10,
    borderRadius: 7,
  },

  boxText: {
    color: "#fff4e6",
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 5,
  },

  boxButton: {
    borderRadius: 7,
    backgroundColor: "#f2dec4",
  },

  saveButtonContainer: {
    padding: 10,
  },

  saveButtonItem: {
    backgroundColor: "#f2dec4",
    borderRadius: 7,
  },
});
