import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import AuthContainer from '@/components/auth-container';
import { useUser } from '@/hooks/useUser';
import Icon, { IconName } from '@/components/icon';
import Search from '@/components/search';

import HouseCleanImg from '@/assets/images/house_clean.png'
import Plumbing from '@/assets/images/plumbing.png'
import Cooking from '@/assets/images/cooking.png'

type Service = {
    icon: IconName,
    name: string
}

const services: Service[] = [
    {
        icon: 'Home',
        name: 'All'
    },
    {
        icon: 'Clean',
        name: 'Clean'
    },
    {
        icon: 'Repair',
        name: 'Repair'
    },
    {
        icon: 'Pest',
        name: 'Pest'
    },
    {
        icon: 'Food',
        name: 'Food'
    },
    {
        icon: 'Laundry',
        name: 'Laundry'
    }
]

const topPicks = [{
    name: 'Full house Cleaning',
    image: HouseCleanImg,
    backgroundColor: '#FFEBF0'
},
{
    name: 'Plumbing',
    image: Plumbing,
    backgroundColor: '#ECFCFF'
},
{
    name: 'Cooking',
    image: Cooking,
    backgroundColor: '#EAEAFF'
}]

const Home = () => {
    const [user] = useUser()
    const [service, setService] = useState(services[0].name)
    const navigation = useNavigation();

    if (!user) return null;
    return (
        <AuthContainer style={styles.container}>
            <ScrollView>

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
                    <Search placeholder='Find it here' style={styles.search} />
                </SafeAreaView>

                <View style={styles.serviceContainer}>
                    {
                        services.map(item =>
                            <TouchableWithoutFeedback onPress={() => setService(item.name)} key={item.name}>
                                <View style={[styles.service, item.name == service ? styles.serviceActive : {}]} >
                                    <Icon name={item.icon} />
                                    <Text style={styles.serviceText}>{item.name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }

                </View>

                <View style={styles.topPickContainer}>
                    <Text style={styles.topPickTitle}>Top pick</Text>
                    <View style={styles.topPickCardContainer}>
                        {/* Right Side */}

                        <View style={[styles.topPickCard, { backgroundColor: topPicks[0].backgroundColor }]}>
                            <TouchableOpacity>
                                <View style={[styles.topPickImage, { height: 160 }]}>
                                    <Image source={topPicks[0].image} ></Image>
                                </View>
                                <Text style={styles.topPickText}>{topPicks[0].name}</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Left Side */}
                        <View style={styles.leftSide}>
                            <View style={[styles.topPickCard, { marginBottom: 16, backgroundColor: topPicks[1].backgroundColor }]}>
                                <TouchableOpacity>
                                    <View style={styles.topPickImage}>
                                        <Image source={topPicks[1].image} ></Image>
                                    </View>
                                    <Text style={styles.topPickText}>{topPicks[1].name}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.topPickCard, { backgroundColor: topPicks[2].backgroundColor }]}>
                                <TouchableOpacity>
                                    <View style={styles.topPickImage}>
                                        <Image source={topPicks[2].image} ></Image>
                                    </View>
                                    <Text style={styles.topPickText}>{topPicks[2].name}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 80 }}></View>
            </ScrollView>

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
    },
    serviceContainer: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 24,
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    service: {
        width: 104,
        height: 108,
        marginVertical: 8,
        padding: 10,
        borderWidth: 2,
        borderColor: '#EAEAFF',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    serviceText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#B8B8D2',
        marginTop: 16
    },
    serviceActive: {
        borderColor: '#6E6BE8',
    },
    topPickContainer: {
        paddingHorizontal: 24,
        marginTop: 16,
        width: '100%'
    },
    topPickCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rightSide: {
    },
    leftSide: {
    },
    topPickTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#1F126B',
        marginBottom: 16
    },
    topPickCard: {
        padding: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        alignItems: 'center',
        width: 160,
        justifyContent: 'center'
    },
    topPickImage: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topPickText: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 16,
        textAlign: 'center'
    }
});

export default Home;
