import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { CartProductItem, Button } from '../components';
import products from '../data/cart';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (total, product) => total + product.item.price * product.quantity,
    0
  );
  const navigation = useNavigation();
  const onCheckout = () => {
    navigation.navigate('Address');
  };
  return (
    <View style={styles.page}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartProductItem cartItem={item} />}
        ListHeaderComponent={() => (
          <View>
            <Text style={{ fontSize: 18 }}>
              Subtotal ({products.length} items) :{' '}
              <Text style={{ color: '#e47911', fontWeight: 'bold' }}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button onPress={onCheckout} text="Proceed to Checkout" />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
