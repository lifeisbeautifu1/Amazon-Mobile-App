import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductScreen } from '../screens';
import { SafeAreaView, View, TextInput } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const HeaderComponent = ({ searchValue, setSearchValue }) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#22e3dd' }}>
      <View
        style={{
          margin: 10,
          paddingHorizontal: 5,
          backgroundColor: 'white',
          borderRadius: 4,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <AntDesign
          style={{ marginRight: 5 }}
          name="search1"
          size={20}
          color="#444"
        />
        <TextInput
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          style={{ height: 40 }}
          placeholder="Search..."
        />
      </View>
    </SafeAreaView>
  );
};

const Router = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Home',
          header: () => (
            <HeaderComponent
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          ),
        }}
        name="HomeStack"
      >
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen
        options={{ title: 'Product' }}
        name="Product"
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
};

export default Router;
