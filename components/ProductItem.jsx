import { StyleSheet, Text, View, Image } from 'react-native';

import Rating from './Rating';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: product?.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {product?.title}
        </Text>
        <Rating
          rating={product?.avgRating}
          numberOfReviews={product?.ratings}
        />
        <Text style={styles.price}>
          from ${product?.price}{' '}
          {product?.oldPrice && (
            <Text style={styles.oldPrice}> ${product?.oldPrice}</Text>
          )}
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
