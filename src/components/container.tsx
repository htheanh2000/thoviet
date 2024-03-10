import { useNavigation } from "@react-navigation/native";
import React, { Children, useEffect, useState } from "react"
import { View, ViewStyle } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';

type Props = {
    children?: React.ReactNode;
    style?: ViewStyle
}
const Container = ({children,style}: Props) => {
    const navigation = useNavigation();

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    // Handle user state changes
    function onAuthStateChanged(user: any) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (user) {
      navigation.navigate('home' as never)
    } 
    return (
        <GestureHandlerRootView>
            <View style={style}>
                {children}
            </View>
        </GestureHandlerRootView>
    )
}

export default Container