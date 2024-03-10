import Button from '@/components/button';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ViewStyle } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {
  children?: React.ReactNode;
  style?: ViewStyle
}

const AuthContainer = ({children,style}: Props) => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const navigation = useNavigation();
    // Handle user state changes
    function onAuthStateChanged(user: any) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;

    if (!user) {
      navigation.navigate('sign-in' as never)
    }
    
    return (
          <GestureHandlerRootView>
          <View style={style}>
              {children}
          </View>
      </GestureHandlerRootView>
    );
};

export default AuthContainer;
