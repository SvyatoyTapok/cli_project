import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import styles from '../components/styles/LayoutScreenStyle';
import {useAppDispatch, useAppSelector} from '../store/hook';
import {selectFavoriteList, selectLangList} from '../store/selectors';
import {FlatList} from 'react-native-gesture-handler';
import {addFavorite, deleteFavorite} from '../redux/favoriteLanguages';

export default function FavouriteScreen() {
  const langs = useAppSelector(selectLangList);
  const favorite = useAppSelector(selectFavoriteList);
  const dispatch = useAppDispatch();
  console.log(langs.length, favorite.length);
  return (
    <View style={[styles.layoutScreen]}>
      <FlatList
        data={langs}
        renderItem={({item}) => (
          <TouchableHighlight
            onPress={() => {
                if (favorite.find(
                    favItem => favItem.language === item.language,
                  )) {
                    dispatch(deleteFavorite(item.language))
                  } else {
              dispatch(addFavorite(item));
                  }
            }}
            style={{
              padding: 16,
              backgroundColor: favorite.find(
                favItem => favItem.language === item.language,
              )
                ? 'red'
                : 'white',
            }}>
            <Text>{item.name}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}
