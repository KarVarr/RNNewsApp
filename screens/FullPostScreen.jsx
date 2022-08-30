import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Loading } from '../components/Loading';

export const FullPostScreen = ({ route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState('');
  const {id, title} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title
    })
    setIsLoading(true);
    axios
      .get('https://630e257b109c16b9abf5a964.mockapi.io/articles/' + id)
      .then(({ data }) => {
        setDate(data);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Loading error!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView style={{ height: 'auto' }}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: date.imageUrl,
          }}
        />
        <Text style={styles.text}>{date.text}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 15,
  },
  img: {
    width: '100%',
    height: 250,
    marginBottom: 30,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    color: 'darkgreen',
  },
});
