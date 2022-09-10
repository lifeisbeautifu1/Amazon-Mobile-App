import { StyleSheet, View } from 'react-native';
import React from 'react';

import { ProductItem } from '../components';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <ProductItem />
      <ProductItem />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
