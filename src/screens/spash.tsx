import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import logo  from '@/assets/images/logo.png'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}/>
                <Text style={styles.textHeader}>WoWHome</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    header: {
        display: 'flex',
    },
    textHeader: {
        textAlign:'center',
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default SplashScreen