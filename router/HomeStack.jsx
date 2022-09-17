import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductScreen } from '../screens';
import { SafeAreaView, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const HeaderComponent = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: 'Home', header: () => <HeaderComponent /> }}
        name="HomeStack"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ title: 'Product' }}
        name="Product"
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
};

export default Router;
