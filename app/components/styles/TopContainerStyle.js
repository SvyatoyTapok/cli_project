import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    zIndex: 100,
  },
  topText: {
    fontSize: 17.5,
    fontWeight: 300,
  },
  topIconProfile: {
    width: 34,
    height: 34,
    borderRadius: 20,
  },
});

export default styles;
