import {useEffect, useState} from 'react';
import {View, Button, Text, Pressable, Image} from 'react-native';
import TranslateInput from '../components/TranslateInput';
import {postRequest, getLanguages} from '../api/TextTranslate';
import {TranslateScreen, Language, Translate} from '../api/RequestTypes';
import styles from '../components/styles/TranslateScreenStyle';
import DropDownTranslate from '../components/DropDownTranslate';

export default function TranslateScreen({navigation}: TranslateScreen) {
  const [text, setText] = useState<string>();
  const [source, setSource] = useState<string>('en');
  const [target, setTarget] = useState<string>('ru');
  const [result, setResult] = useState<Translate[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getLanguages(target);
      setLanguages(response);
    }
    fetchData();
  }, []);

  const handleClick = async () => {
    const response = await postRequest(text, source, target);
    const translatedText:Translate = response?.[0]?.translatedText;
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
      <View style={{alignItems: 'center'}}>
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
              style={{width: 20, height: 20}}
              source={require('../assets/icons/swapIcon.png')}></Image>
          </Pressable>
          <Text> Язык на который переводим {target}</Text>
        </View>
        <DropDownTranslate setTarget={setTarget} languages={languages} />
        <TranslateInput placeholder="Перевод" value={result} />
      </View>
      <Button
        title="Go to title"
        onPress={() => navigation.navigate('Layout')}
      />
    </View>
  );
}
