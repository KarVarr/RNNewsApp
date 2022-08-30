import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ScrollView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Post from '../components/Post';
import { useEffect, useState } from 'react';

export const HomeScreen = ({navigation}) => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://630e257b109c16b9abf5a964.mockapi.io/articles')
      .then(({ data }) => {
        setItems(data);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Loading error!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} style={styles.indicator} />
        <Text style={styles.indicatorText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost' , {id: item.id, title: item.title})}>
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createAt={item.createAt}
            />
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {[...items, ...items].map(obj => (
          <Post
            key={obj.id}
            title={obj.title}
            createAt={obj.createAt}
            imageUrl={obj.imageUrl}
          />
        ))}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    marginBottom: 20,
  },
  indicatorText: {
    fontSize: 24,
    fontWeight: '700',
  },
});
