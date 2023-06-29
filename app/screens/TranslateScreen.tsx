import {useEffect, useState} from 'react';
import {View, Button, Text, Pressable, Image} from 'react-native';
import TranslateInput from '../components/TranslateInput';
import {postRequest, getLanguages} from '../api/TextTranslate';
import {TranslateScreen, Language} from '../api/RequestTypes';
import styles from '../components/styles/TranslateScreenStyle';
import DropDownTranslate from '../components/DropDownTranslate';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStack} from './Navigation/NavigationStack';

export default function TranslateScreen() {
  const [text, setText] = useState('');
  const [source, setSource] = useState<string>('en');
  const [target, setTarget] = useState<string>('ru');
  const [result, setResult] = useState('');
  const [languages, setLanguages] = useState<Language[]>([]);
  const navigation = useNavigation<StackNavigationProp<MainStack>>();

  useEffect(() => {
    async function fetchData() {
      const response = await getLanguages(target);
      setLanguages(response);
    }
    fetchData();
  }, []);

  const handleClick = async () => {
    const response = await postRequest(text, source, target);
    const {translatedText} = response?.[0];
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
          onChangeText={setText}
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
        <Pressable style={[styles.]}>
          <Text>Перевести</Text>
        </Pressable>
      </View>
      <Button
        title="Go to title"
        onPress={() => navigation.navigate('Layout')}
      />
    </View>
  );
}
