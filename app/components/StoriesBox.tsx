import styles from './styles/StoriesboxStyle';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import StoriesItem from './StoriesItem';

export default function StoriesBox() {
  return (
    <View style={[styles.storiesBox]}>
      <View style={[styles.storiesTitle]}>
        <Text style={[styles.storiesCurrentTitle]}>Истории</Text>
      </View>
      <View style={{overflow: 'hidden'}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <StoriesItem
            imageSrc={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG'
            }
            storyText={'Какой то заголовок'}
          />
          <StoriesItem
            imageSrc={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG'
            }
            storyText={'Какой-то заголовок'}
          />
          <StoriesItem
            imageSrc={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG'
            }
            storyText={'Какой-то заголовок'}
          />
          <StoriesItem
            imageSrc={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG'
            }
            storyText={'Какой-то заголовок'}
          />
          <StoriesItem
            imageSrc={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/274px-A_small_cup_of_coffee.JPG'
            }
            storyText={'Какой-то заголовок'}
          />
        </ScrollView>
      </View>
    </View>
  );
}
