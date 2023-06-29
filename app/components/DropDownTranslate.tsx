import React from "react";
import SelectDropdown from "react-native-select-dropdown";

function DropDownTranslate({ languages, setTarget }) {
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
