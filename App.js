import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen,
  ProductScreen,
  ShoppingCartScreen,
  AddressScreen,
} from './screens';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: 'white' },
  headerTitleStyle: { color: 'black' },
  headerTintColor: 'black',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{ title: 'Shipping Address' }}
          name="AddressScreen"
          component={AddressScreen}
        />
        <Stack.Screen
          options={{ title: 'Shopping Cart' }}
          name="ShoppingCart"
          component={ShoppingCartScreen}
        />
        <Stack.Screen
          options={{ title: 'Products' }}
          name="Product"
          component={ProductScreen}
        />
        <Stack.Screen
          options={{ title: 'Home' }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
