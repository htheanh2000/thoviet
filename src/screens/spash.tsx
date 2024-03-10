import React from 'react'
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import logo  from '@/assets/images/logo.png'
import {  THEME } from '@/constant/color'
import Container from '@/components/container';

const SplashScreen = () => {
    const theme = useColorScheme() || 'light';
    const styles = getStyles(theme);
    return (
        <Container style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.textHeader}>WowHome</Text>
            </View>
        </Container>
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