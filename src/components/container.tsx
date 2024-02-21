import React, { Children } from "react"
import { View, ViewStyle } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler";


type Props = {
    children?: React.ReactNode;
    style?: ViewStyle
}
const Container = ({children,style}: Props) => {
    return (
        <GestureHandlerRootView>

        <View style={style}>
            {children}
        </View>
        </GestureHandlerRootView>
    )
}

export default Container