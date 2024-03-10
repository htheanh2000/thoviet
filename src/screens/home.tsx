import Button from '@/components/button';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AuthContainer from '@/components/auth-container';
import { useUser } from '@/hooks/useUser';

const Home = () => {
    const [user] = useUser()
    const navigation = useNavigation();
    
    if(!user) return null;
    return (
        <AuthContainer style={styles.container}>
            <Text>Home: {user.username}</Text>
        </AuthContainer>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});

export default Home;
