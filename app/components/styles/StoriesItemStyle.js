import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  storyComponent: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 20,
  },
  textStoryItem: {
    position: "absolute",
    zIndex: 2,
    color: "white",
    fontWeight: "500",
    paddingBottom: 10,
  },
  imageStoryItem: {
    width: 115,
    height: 115,
    borderRadius: 20,
  },
});

export default styles;
