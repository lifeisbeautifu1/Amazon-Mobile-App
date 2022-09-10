import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import React from 'react';

import { ProductItem } from '../components';
import products from '../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
