import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  separatorItem: {
    backgroundColor: "lightgray",
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
    height: 0.5,
  },
  dropdownContainer: {
    backgroundColor: "white",
    width: 200,
    position: "absolute",
    top: 50,
    left: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  dropdownOption: {
    position: "relative",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
});

export default styles