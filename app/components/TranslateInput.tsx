import {TextInput} from 'react-native';
import {useState} from 'react';
import {View} from 'react-native';
import styles from './styles/TranslateInputStyle';
type TranslateInputType = {
  placeholder: string;
  value: string;
  setText: () => void;
  handleClick: () => void;
  editable: boolean;
};

function TranslateInput({
  placeholder,
  value,
  setText,
  handleClick,
  editable,
}: TranslateInputType) {
  const [heightValue, setHeightValue] = useState(40);
  return (
    <View style={[styles.TextBoxes, {height: heightValue}]}>
      <TextInput
        onChangeText={setText}
        onChange={handleClick}
        onLayout={event => {
          if (event.nativeEvent.layout) {
            setHeightValue(event.nativeEvent.layout.height + 40);
          }
        }}
        editable={editable}
        multiline
        value={value}
        placeholder={placeholder}
        style={{textAlign: 'center', fontSize: 20}}
      />
    </View>
  );
}
export default TranslateInput;
