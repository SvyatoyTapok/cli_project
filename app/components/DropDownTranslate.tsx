import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Language } from "../api/RequestTypes";
type DropDownTranslateType = {
  languages: Language[]
  setTarget:(item:string)=>void
}

function DropDownTranslate({ languages, setTarget }:DropDownTranslateType) {
  return (
    <SelectDropdown
      defaultButtonText={"Выберите язык"}
      data={languages}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem.name;
      }}
      rowTextForSelection={(item) => {
        return item.name;
      }}
      onSelect={(item) => {
        setTarget(item.language);
      }}
      search={true}
    />
  );
}

export default DropDownTranslate;
