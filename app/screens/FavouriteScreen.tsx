import React, {useEffect, useState} from 'react';
import {Text, TouchableHighlight, View, Image, TextInput} from 'react-native';
import styles from '../components/styles/LayoutScreenStyle';
import {useAppDispatch, useAppSelector} from '../store/hook';
import {selectFavoriteList, selectLangList} from '../store/selectors';
import {FlatList} from 'react-native-gesture-handler';
import {addFavorite, deleteFavorite} from '../redux/favoriteLanguages';
import {Language} from '../api/RequestTypes';

export default function FavouriteScreen() {
  const langs = useAppSelector(selectLangList);
  const favorite = useAppSelector(selectFavoriteList);
  const dispatch = useAppDispatch();
  const [textInput, setTextInput] = useState('');

  const [filteredLangs, setFilteredLangs] = useState<Language[]>([]);

  useEffect(() => {
    setFilteredLangs(
      langs.filter(lang =>
        lang.name.toLowerCase().includes(textInput.toLowerCase()),
      ),
    );
  }, [textInput]);

  return (
    <View style={[styles.layoutScreen]}>
      <View style={styles.searchInputContainer}>
        <TextInput
          onChangeText={setTextInput}
          placeholder="Поиск по языкам"
          placeholderTextColor={'white'}
          style={styles.searchInput}
        />
      </View>
      <FlatList
        data={filteredLangs ? filteredLangs : langs}
        renderItem={({item}) => (
          <TouchableHighlight
            underlayColor="#43f761"
            onPress={() => {
              if (
                favorite.find(favItem => favItem.language === item.language)
              ) {
                dispatch(deleteFavorite(item.language));
              } else {
                dispatch(addFavorite(item));
              }
            }}
            style={{
              padding: 16,
              backgroundColor: favorite.find(
                favItem => favItem.language === item.language,
              )
                ? 'lightgreen'
                : 'gray',
            }}>
            <Text>{item.name}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}
