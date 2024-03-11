import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/spash';
import OnBoardingScreen from './screens/onboarding';
import SignInScreen from './screens/sign-in';
import SignUpScreen from './screens/sign-up';
import ResetPassword from './screens/reset-password';
import CreatePasswordScreen from './screens/create-new-password';
import Home from './screens/home';
import Loading from './screens/loading';
import ServiceBooking from './screens/service-booking';

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => console.log('Link to help')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={OnBoardingScreen} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='service-booking'>
        <Stack.Screen name="spash" component={SplashScreen} />
        <Stack.Screen name="onboarding" component={OnBoardingScreen} />
        <Stack.Screen name="sign-in" component={SignInScreen} />
        <Stack.Screen name="sign-up" component={SignUpScreen} />
        <Stack.Screen name="reset-password" component={ResetPassword} />
        <Stack.Screen name="create-new-password" component={CreatePasswordScreen} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="service-booking" component={ServiceBooking}  />
        <Stack.Screen name="drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  console.log("App");

  return (
    <Navigator />
  );
}
