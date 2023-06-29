import {PressableProps, TextInput, TextInputProps} from 'react-native';
import {useState} from 'react';
import {View} from 'react-native';
import styles from './styles/TranslateInputStyle';
type TranslateInputType = {
} & TextInputProps;

function TranslateInput({...props}: TranslateInputType) {
  const [heightValue, setHeightValue] = useState(40);
  return (
    <View style={[styles.TextBoxes, {height: heightValue}]}>
      <TextInput
      {...props}
        onLayout={event => {
          if (event.nativeEvent.layout) {
            setHeightValue(event.nativeEvent.layout.height + 40);
          }
        }}
        multiline
        style={{textAlign: 'center', fontSize: 20}}
      />
    </View>
  );
}
export default TranslateInput;
