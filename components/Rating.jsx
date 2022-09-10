import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Rating = ({ rating, numberOfReviews }) => {
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}
    >
      {rating >= 1 ? (
        <FontAwesome name="star" size={20} color="#ffc000" />
      ) : rating >= 0.5 ? (
        <FontAwesome name="star-half-empty" size={20} color="#ffc000" />
      ) : (
        <FontAwesome name="star-o" size={20} color="#ffc000" />
      )}
      {rating >= 2 ? (
        <FontAwesome name="star" size={20} color="#ffc000" />
      ) : rating >= 1.5 ? (
        <FontAwesome name="star-half-empty" size={20} color="#ffc000" />
      ) : (
        <FontAwesome name="star-o" size={20} color="#ffc000" />
      )}
      {rating >= 3 ? (
        <FontAwesome name="star" size={20} color="#ffc000" />
      ) : rating >= 2.5 ? (
        <FontAwesome name="star-half-empty" size={20} color="#ffc000" />
      ) : (
        <FontAwesome name="star-o" size={20} color="#ffc000" />
      )}
      {rating >= 4 ? (
        <FontAwesome name="star" size={20} color="#ffc000" />
      ) : rating >= 3.5 ? (
        <FontAwesome name="star-half-empty" size={20} color="#ffc000" />
      ) : (
        <FontAwesome name="star-o" size={20} color="#ffc000" />
      )}
      {rating >= 5 ? (
        <FontAwesome name="star" size={20} color="#ffc000" />
      ) : rating >= 4.5 ? (
        <FontAwesome name="star-half-empty" size={20} color="#ffc000" />
      ) : (
        <FontAwesome name="star-o" size={20} color="#ffc000" />
      )}
      <Text style={{ marginLeft: 5 }}>{numberOfReviews}</Text>
    </View>
  );
};

export default Rating;
