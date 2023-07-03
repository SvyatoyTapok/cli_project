import {useEffect, useState} from 'react';
import {View, Button, Pressable, Image} from 'react-native';
import TranslateInput from '../components/TranslateInput';
import {postRequest} from '../api/TextTranslate';
import styles from '../components/styles/TranslateScreenStyle';
import DropDownTranslate from '../components/DropDownTranslate';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStack} from './Navigation/NavigationStack';
import {useThrottle} from '../lib/hooks/useThrottle';
import {fetchLanguages} from '../store/languagesSlice';
import {languages} from '../store/selectors';
import {useAppDispatch} from '../store/hook';

export default function TranslateScreen() {
  const [text, setText] = useState('');
  const [source, setSource] = useState<string>('en');
  const [target, setTarget] = useState<string>('ru');
  const [result, setResult] = useState('');
  const navigation = useNavigation<StackNavigationProp<MainStack>>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    throttledCallback();
  }, [text]);

  useEffect(() => {
    dispatch(fetchLanguages(target));
  }, []);

  const handleClick = async () => {
    const response = await postRequest(text, source, target);
    const {translatedText} = response?.[0];
    setResult(translatedText);
  };

  const throttledCallback = useThrottle(handleClick, 1000);

  const handleSwap = () => {
    setSource(target);
    setTarget(source);
    setText(result);
    setResult(text);
  };

  const indexOfSource = languages.findIndex(i => i.language == source);
  const indexOfTarget = languages.findIndex(i => i.language == target);

  return (
    <View style={[styles.translateScreenContainer]}>
      <View style={{alignItems: 'center'}}>
        <TranslateInput
          value={text}
          handleClick={handleClick}
          onChangeText={setText}
          placeholder="Введите ваш текст"
        />
        <DropDownTranslate
          indexTarget={indexOfSource}
          setTarget={setSource}
          languages={languages}
        />
        <View style={[styles.languagesContainer]}>
          <Pressable onPress={handleSwap}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 50,
              }}
              source={require('../assets/icons/swapIcon.png')}></Image>
          </Pressable>
        </View>
        <DropDownTranslate
          indexTarget={indexOfTarget}
          setTarget={setTarget}
          languages={languages}
        />
        <TranslateInput
          handleClick={handleClick}
          placeholder="Перевод"
          value={result}
        />
      </View>
      <View style={[styles.bottomButton]}>
        <Button
          title="Go to Layout"
          onPress={() => navigation.navigate('Layout')}
        />
      </View>
    </View>
  );
}
