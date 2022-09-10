import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const QuantitySelector = ({ quantity, setQuantity }) => {
  const onMinus = () => {
    setQuantity(Math.max(1, quantity - 1));
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable style={styles.button} onPress={onMinus}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable style={styles.button} onPress={onPlus}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    width: 130,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4e4e7',
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9',
  },
});

export default QuantitySelector;
