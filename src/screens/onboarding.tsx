import Button from '@/components/button';
import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
// Define the item data structure
type CarouselItem = {
    title: string;
    text: string;
    img: any;
};

// Mock data for the carousel
const entries: CarouselItem[] = [
    {
        title: 'Quick and Easy Booking',
        text: 'We offer a 3-step booking which solves your problem quickly and easily',
        img: require('@/assets/images/onboarding/onboarding-1.png'),
    },
    {
        title: 'Sercurity and Professionalism', text: 'All our domestic workers have transparent background and are well-trained ',
        img: require('@/assets/images/onboarding/onboarding-2.png'),
    },
    {
        title: 'Give your home a Wow feeling',
        text: 'We care about every small details to sastisfy your needs when you use our service',
        img: require('@/assets/images/onboarding/onboarding-3.png'),
    },
];

// Get the window width
const { width: viewportWidth } = Dimensions.get('window');

// Carousel component
const OnBoardingScreen = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const carouselRef = useRef<Carousel<CarouselItem>>(null);
    // Render each carousel item
    const renderItem = ({ item }: { item: CarouselItem }) => (
        <View style={styles.item}>
            <Image source={item.img} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
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
            {/* CTA Button view */}
            {
                activeIndex == entries.length - 1 ? // CTA last screen
                <View style={styles.CTAView}>
                    <Text style={styles.CTATitle}>Welcome, let’s get started!</Text>
                    <View style={styles.RowCenter}>
                        <Button style={styles.CTAButton} type='secondary' title='Login'></Button>
                        <Button style={styles.CTAButton} title='Sign Up'></Button>
                    </View>
                </View>
                    :
                    <View style={[styles.CTAView, styles.RowCenter]}>
                        <Button style={styles.CTAButton} type='secondary' title='Skip'></Button>
                        <Button onPress={() => carouselRef.current?.snapToNext()} style={styles.CTAButton} title='Next'></Button>
                    </View>
            }


        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
    },
    carouselView: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        paddingTop: 96,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        marginTop: 32,
        marginBottom: 32,
        lineHeight: 32,
        fontWeight: 'bold',
        maxWidth: 200,
        textAlign: 'center',
        color: '#1F126B'
    },
    content: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        maxWidth: 300,
        color: '#78789D'
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
        marginTop: 32,
        borderRadius: 100
    },
    paginationActive: {
        width: 28,
        backgroundColor: '#F7658B'
    },
    CTAView: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: 64
    },
    RowCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CTATitle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
        marginBottom: 24,
        color: '#78789D'
    },
    CTAButton: {
        marginHorizontal: 16
    }
});

export default OnBoardingScreen;
