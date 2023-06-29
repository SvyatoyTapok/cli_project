import React, {useEffect, useRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Language} from '../api/RequestTypes';
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
    <SelectDropdown
      ref={dropdown}
      
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
  );
}

export default DropDownTranslate;
