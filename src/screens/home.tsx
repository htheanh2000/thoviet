import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import AuthContainer from '@/components/auth-container';
import { useUser } from '@/hooks/useUser';
import Icon, { IconName } from '@/components/icon';
import Search from '@/components/search';

import HouseCleanImg from '@/assets/images/house_clean.png'
import Plumbing from '@/assets/images/plumbing.png'
import Cooking from '@/assets/images/cooking.png'
import Carousel from 'react-native-snap-carousel';
import Button from '@/components/button';

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
    backgroundColor: '#FFEBF0',
},
{
    name: 'Plumbing',
    image: Plumbing,
    backgroundColor: '#ECFCFF',
},
{
    name: 'Cooking',
    image: Cooking,
    backgroundColor: '#EAEAFF',
}]

// Define the item data structure
type CarouselItem = {
    title: string;
    img: any;
    discount: number;
};

// Mock data for the carousel
const entries: CarouselItem[] = [
    {
        title: 'Full Pack',
        img: HouseCleanImg,
         discount: 30,

    },
    {
        title: 'Plumbing',
        img: Plumbing,
        discount: 10,
    },
    {
        title: 'Cooking',
        img: Cooking,
        discount: 5,
    },
];

const Home = () => {
    const [user] = useUser()
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [service, setService] = useState(services[0].name)
    const carouselRef = useRef<Carousel<CarouselItem>>(null);
    const navigation = useNavigation();

    const  selectService = () => {
        navigation.navigate('service-booking' as never);
    }

    // Render each carousel item
    const renderItem = ({ item }: { item: CarouselItem }) => (
        <TouchableOpacity>
            <View style={styles.item}>
                <View style={styles.carouselImage}>
                    <Image source={item.img} />
                </View>
                <View style={styles.carouselLeftView}>
                    <Text style={styles.carouselTitle}>{item.title}</Text>
                    <Text style={styles.carouselDiscount}>{item.discount}% OFF</Text>
                    <Button textStyle={{ color: '#583EF2', fontWeight: '500' }} size='small' type={'secondary'} title='Book now'></Button>
                </View>
            </View>
        </TouchableOpacity>
    );

    const { width: viewportWidth } = Dimensions.get('window');


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
                            <TouchableWithoutFeedback onPress={selectService} key={item.name}>
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

                <View style={styles.carouselView}>
                    <Carousel
                        ref={carouselRef}
                        data={entries}
                        renderItem={renderItem}
                        sliderWidth={viewportWidth}
                        itemWidth={viewportWidth}
                        layout={'default'}
                        onSnapToItem={(index) => setActiveIndex(index)}
                    />
                    {/* pagination */}
                    <View style={styles.paginationView}>
                        {entries.map((_, index) =>
                            <View
                                key={index} style={[styles.pagination, activeIndex == index && styles.paginationActive]}>
                            </View>
                        )}
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
    },
    item: {
        marginTop: 24,
        minHeight: 160,
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#6E6BE8',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,

    },
    carouselView: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    paginationView: {
        display: 'flex',
        flexDirection: 'row',
    },
    pagination: {
        width: 9,
        height: 5,
        marginHorizontal: 4,
        backgroundColor: '#EAEAFF',
        marginTop: 16,
        borderRadius: 100
    },
    paginationActive: {
        width: 28,
        backgroundColor: '#F7658B'
    },
    carouselLeftView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    carouselTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 8
    },
    carouselDiscount: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 16
    },
    carouselImage: {
        padding: 32,
        backgroundColor: '#F9F9FB',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;
