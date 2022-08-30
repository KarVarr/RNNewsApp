import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { FullPostScreen } from './screens/FullPostScreen';
import { Navigation } from './screens/Navigation';

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
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
