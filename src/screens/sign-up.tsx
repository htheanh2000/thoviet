import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import logo  from '@/assets/images/logo_icon.png'
import {  THEME } from '@/constant/color'
const SignUpScreen = () => {
    const theme = useColorScheme() || 'light';
    const styles = getStyles(theme);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.textHeader}>Sign up</Text>
                <Text style={styles.subtitle}>Please enter your details to sign up and create an account.</Text>
            </View>
        </View>
    )

    
}

const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    container: {
        backgroundColor: THEME[theme].white, 
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitle: {
        fontSize: 14,
        lineHeight: 24,
        color: '#38385E',
        maxWidth: 300,
        textAlign: 'center'
    },
    textHeader: {
        textAlign:'center',
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        marginVertical: 16
    }
})





export default SignUpScreen