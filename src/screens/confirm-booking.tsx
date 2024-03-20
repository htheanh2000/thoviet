import AuthContainer from "@/components/auth-container"
import Button from "@/components/button"
import Icon from "@/components/icon"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const ConfirmBooking = () => {

    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack();
    }

    const handleSubmit = () => {
        navigation.navigate('booking-successfully' as never)
    }

    return (
        <AuthContainer>
            <View style={styles.header}>
                <SafeAreaView>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={goBack}>
                            <Icon style={styles.backIcon} name="BackPurple"></Icon>
                        </TouchableOpacity>
                        <Text style={styles.title}>Confirm your booking</Text>
                        <Icon style={{ opacity: 0 }} name="Back"></Icon>
                    </View>
                </SafeAreaView>
            </View>
            <View style={styles.body}>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Text style={styles.titleDetail}>Booking detail</Text>
                        {/* <TouchableOpacity >
                            <Icon name="Edit"></Icon>
                        </TouchableOpacity> */}
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Working time</Text>
                        <Text style={styles.text}>Monday - 22 Mar 2021</Text>
                        <Text style={styles.text}>12:30 PM</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Location</Text>
                        <Text style={styles.text}>Room 123, Brooklyn St, Kepler District</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Note</Text>
                        <Text style={styles.text}>No note added</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Domestic worker</Text>
                        <Text style={styles.text}>Janet Kim</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Promotion code</Text>
                        <Text style={styles.text}>No note added</Text>
                    </View>
                </View>
            </View>
            <View style={styles.submitView}>
                    <View style={styles.stepView}>
                        <View style={styles.dot}></View>
                        <View style={styles.line}></View>
                        <View style={[styles.dot, styles.active]}></View>
                    </View>
                    <Button style={{minWidth: 200}} onPress={handleSubmit} title="Book now"></Button>
                </View>

        </AuthContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 16,
        paddingHorizontal: 24
    },
    body: {
        width: '100%',
        paddingTop: 16,
        paddingHorizontal: 24
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#1F126B',
        fontSize: 20,
        fontWeight: '500'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#38385E',
        marginTop: 32,
        marginBottom: 8,
    },
    backIcon: {
        color: '#1F126B',
    },
    card: {
        padding: 20,
        borderWidth: 1,
        marginTop: 16,
        width: '100%',
        borderColor: '#EAEAFF',
        borderTopRightRadius: 32,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 32,
        borderBottomLeftRadius: 32,
        display: 'flex',
    },
    titleDetail: {
        color: '#583EF2',
        fontSize: 20,
        fontWeight: '500',
    },
    text: {
        fontSize: 16,
        marginTop: 4,
        color: '#78789D'
    },
    submitView: {
        minHeight: 100,
        marginTop: 16,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        
    },
    stepView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 100,
        backgroundColor: '#FFEBF0'
    },
    line: {
        width: 24,
        height: 1,
        backgroundColor: '#FFEBF0'
    },
    active: {
        backgroundColor: '#F3A8A2'
    }
})

export default ConfirmBooking