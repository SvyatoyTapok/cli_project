import React, {useEffect, useRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Language} from '../api/RequestTypes';
import styles from './styles/DropDownTranslate';
import {View} from 'react-native';
type DropDownTranslateType = {
  languages: Language[];
  setTarget: (item: string) => void;
  indexTarget: number;
};
function DropDownTranslate({
  languages,
  setTarget,
  indexTarget,
}: DropDownTranslateType) {
  const dropdown = useRef<SelectDropdown>(null);
  useEffect(() => {
    if (languages.length) {
      dropdown.current?.selectIndex(indexTarget);
    }
  }, [languages, indexTarget]);

  return (
    <View style={[styles.dropDownStyle]}>
      <SelectDropdown
        ref={dropdown}
        selectedRowStyle={{backgroundColor: '#1b101f'}}
        dropdownStyle={{backgroundColor: 'gray', borderRadius: 15}}
        searchInputStyle={{backgroundColor: 'darkgray', borderColor: '15'}}
        rowStyle={[styles.rowStyle]}
        rowTextStyle={{color: 'white'}}
        buttonTextStyle={{color: 'white'}}
        buttonStyle={{
          backgroundColor: 'darkgrey',
          borderRadius: 15,
          borderWidth: 2,
          borderColor: 'gray',
        }}
        data={languages}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem.name;
        }}
        rowTextForSelection={item => {
          return item.name;
        }}
        onSelect={item => {
          setTarget(item.language);
        }}
        search={true}
      />
    </View>
  );
}

export default DropDownTranslate;
