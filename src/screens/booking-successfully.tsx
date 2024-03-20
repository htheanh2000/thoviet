import AuthContainer from "@/components/auth-container"
import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import FinishImage from '@/assets/images/finish.png'
import Button from "@/components/button"
import { TouchableOpacity } from "react-native-gesture-handler"
const BookingSuccess = () => {
    return (
        <AuthContainer style={styles.container}>
            <Image source={FinishImage} />
            <Text style={styles.title}>Success!</Text>
            <Text style={styles.body}>Ready to say Wow? </Text>
            <Text style={styles.body}>Now you can track your booking or </Text>
            <Text style={styles.body}>go back to home screen</Text>

            <View style={styles.row}>
                <TouchableOpacity>
                    <Button title="Track" style={{ backgroundColor: '#F4F3FD', marginRight: 24 }} textStyle={{ color: '#583EF2' }}></Button>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Button title="Home" style={{ backgroundColor: '#FFEBF0' }} textStyle={{ color: '#F7658B' }}></Button>
                </TouchableOpacity>
            </View>
        </AuthContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginTop: 16,
        marginBottom: 16,
        fontWeight: '500',
        fontSize: 24,
        color: '#1F126B'
    },
    body: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '300',
        lineHeight: 24
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 32,
        justifyContent: 'center'
    }
})

export default BookingSuccess