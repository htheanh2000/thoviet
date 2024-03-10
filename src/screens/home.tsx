import Button from '@/components/button';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import AuthContainer from '@/components/auth-container';
import { useUser } from '@/hooks/useUser';
import Icon from '@/components/icon';
import Input from '@/components/search';
import TextInput from '@/components/text-input';
import Search from '@/components/search';

const Home = () => {
    const [user] = useUser()
    const navigation = useNavigation();

    if (!user) return null;
    return (
        <AuthContainer style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>Hi {user.username},</Text>
                        <Text style={styles.subtitle}>Need some help today?</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name={'Hamburger'} />
                    </TouchableOpacity>
                </View>
                    <Search style={styles.search} />
            </SafeAreaView>
        </AuthContainer>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerContainer: {
        width: '100%',
        backgroundColor: '#6E6BE8',
        borderBottomRightRadius: 45,
        borderBottomLeftRadius: 45
    },
    header: {
        padding: 20,
        paddingVertical: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: '500',
        paddingBottom: 8
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
    },
    search: {
        width: '90%',
        marginHorizontal: '5%',
        backgroundColor: '#fff',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        marginBottom: 48
    }
});

export default Home;
