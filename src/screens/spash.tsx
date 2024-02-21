import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import logo  from '@/assets/images/logo.png'
import {  THEME } from '@/constant/color'
const SplashScreen = () => {
    const theme = useColorScheme() || 'light';
    const styles = getStyles(theme);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.textHeader}>WowHome</Text>
            </View>
        </View>
    )

    
}

const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    container: {
        backgroundColor: THEME[theme].primary, 
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 60,
        height: 60
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textHeader: {
        textAlign:'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: THEME[theme].white,
        marginLeft: 16
    }
})





export default SplashScreen