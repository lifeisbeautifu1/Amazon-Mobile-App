import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import countryList from 'country-list';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.root}>
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
    </View>
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
