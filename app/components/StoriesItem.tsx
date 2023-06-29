import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles/StoriesItemStyle";

type StoriesItemProps = {
  imageSrc: string;
  storyText: string;
}

const StoriesItem = ({ imageSrc, storyText }: StoriesItemProps) => {
  return (
    <View style={[styles.storyComponent]}>
      <Text style={[styles.textStoryItem]}>{storyText}</Text>
      <Image style={[styles.imageStoryItem]} source={{uri: imageSrc}} />
    </View>
  );
}

export default StoriesItem;
