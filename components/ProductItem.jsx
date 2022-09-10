import { StyleSheet, Text, View, Image } from 'react-native';

import { Rating } from './';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg',
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
        </Text>
        <Rating rating={4.5} numberOfReviews={'13,032'} />
        <Text style={styles.price}>
          from $13.59 <Text style={styles.oldPrice}> $17.59</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    flex: 2,
    resizeMode: 'contain',
    height: 150,
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
});
