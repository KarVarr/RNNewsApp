import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={'large'} style={styles.indicator} />
      <Text style={styles.indicatorText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: '100%',
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
