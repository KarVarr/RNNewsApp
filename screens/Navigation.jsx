import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullPostScreen } from './FullPostScreen';
import { HomeScreen } from './HomeScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'News' }}
        />
        <Stack.Screen
          name='FullPost'
          component={FullPostScreen}
          options={{ title: 'Post' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
