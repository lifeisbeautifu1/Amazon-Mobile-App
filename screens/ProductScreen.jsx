import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

import product from '../data/product';
import { QuantitySelector, Button, ImageCarousel } from '../components';

const ProductScreen = () => {
  const { params } = useRoute();
  const [selectedValue, setSelectedValue] = useState(product?.options[0]);
  const [quantity, setQuantity] = useState(1);
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
      >
        {product.options.map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
      <Text style={styles.price}>
        from ${product?.price}{' '}
        {product?.oldPrice && (
          <Text style={styles.oldPrice}> ${product?.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button text="Add To Cart" onPress={() => {}} />
      <Button text="Buy Now" onPress={() => {}} />
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 50,
  },
  title: {},
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});
