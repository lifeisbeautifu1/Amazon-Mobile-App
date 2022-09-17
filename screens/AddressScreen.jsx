import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import countryList from 'country-list';

import { Button } from '../components';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);

  const [fullName, setFullName] = useState('');

  const [phone, setPhone] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [city, setCity] = useState('');

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short');
    } else if (address.length > 10) setAddressError('Address is too long');
  };

  const onCheckout = () => {
    if (addressError) {
      Alert.alert('Fixs all field errors before submiting');
      return;
    }
    if (!fullName) {
      Alert.alert('Please enter a full name');
      return;
    }
    if (!phone) {
      Alert.alert('Please enter a phone number');
      return;
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? 150 : 0}
    >
      <ScrollView style={styles.root}>
        <View>
          <Picker
            selectedValue={country}
            onValueChange={(value) => setCountry(value)}
          >
            {countries.map((c) => (
              <Picker.Item key={c.code} label={c.name} value={c.code} />
            ))}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and Last Name)</Text>
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            placeholder="Phone number"
            keyboardType="numeric"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            placeholder="Address"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={(text) => {
              setAddress(text);
              setAddressError('');
            }}
            style={styles.input}
          />
          {addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            placeholder="City"
            value={city}
            onChangeText={(text) => setCity(text)}
            style={styles.input}
          />
        </View>
        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  errorLabel: {
    color: 'red',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 5,
    padding: 5,
  },
});
