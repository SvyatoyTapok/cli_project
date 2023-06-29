import { useEffect, useState } from "react";
import { View, Button, Text, Pressable, Image } from "react-native";
import TranslateInput from "../components/TranslateInput";
import { postRequest } from "../api/postRequest";
import { getLanguages } from "../api/getLanguages";
import styles from "../components/styles/TranslateScreenStyle";
import DropDownTranslate from "../components/DropDownTranslate";

type TranslateScreen = {
  navigation:string
}

export default function TranslateScreen ({ navigation }:TranslateScreen) {
  const [text, setText] = useState();
  const [source, setSource] = useState("en");
  const [target, setTarget] = useState("ru");
  const [result, setResult] = useState();
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getLanguages(target);
      setLanguages(response);
    }
    fetchData();
  }, []);

  const handleClick = async () => {
    const response = await postRequest(text, source, target);
    const translatedText = response?.[0]?.translatedText;
    setResult(translatedText);
  };

  const handleSwap = async () => {
    setSource(target);
    setTarget(source);
    setText(result);
    setResult(text);
  };

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <DropDownTranslate setTarget={setSource} languages={languages} />
        <TranslateInput
          setText={setText}
          handleClick={handleClick}
          placeholder="Введите ваш текст"
        />
        <View style={[styles.languagesContainer]}>
          <Text> Ваш язык {source}</Text>
          <Pressable onPress={handleSwap}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/icons/swapIcon.png")}
            ></Image>
          </Pressable>
          <Text> Язык на который переводим {target}</Text>
        </View>
        <DropDownTranslate setTarget={setTarget} languages={languages} />
        <TranslateInput placeholder="Перевод" value={result} />
      </View>
      <Button
        title="Go to title"
        onPress={() => navigation.navigate("Layout")}
      />
    </View>
  );
};
