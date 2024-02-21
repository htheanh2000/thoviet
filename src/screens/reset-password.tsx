import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, Image, StyleSheet, TouchableHighlight, useColorScheme, View } from 'react-native'
import key from '@/assets/images/key.png'
import { THEME } from '@/constant/color'
import { Formik } from 'formik'
import Button from '@/components/button'
import * as Yup from 'yup';
import Text from '@/components/text'
import TextInput from '@/components/text-input'
import { useNavigation } from '@react-navigation/native'
import Container from '@/components/container'

const ResetPassword = () => {
    const theme = useColorScheme() || 'light';
    const width = Dimensions.get('window').width; //full width
    const styles = getStyles(theme);
    const navigation = useNavigation()
    // Validation schema using Yup
    const schema = Yup.object().shape({
        phonenumber: Yup.string()
            .required("Phone number must be provided.")
    });

    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={key} />
                    <Text style={styles.textHeader}>Reset your password</Text>
                    <View >
                    <Text style={[styles.subtitle, {maxWidth: width * 0.9 }]}>
                    Please enter your number. We will send a code to your phone to reset your password.
                    </Text>
                    <View style={styles.row}>
                    </View>
                    </View>
                    
                </View>
                <View>

                    <Formik
                        initialValues={{ phonenumber: '' }}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            // Handle form submission here
                            Alert.alert('Login Submitted', JSON.stringify(values));
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={[styles.formContainer, { width: width * 0.9 }]}>
                                <TextInput
                                    onChangeText={handleChange('phonenumber')}
                                    onBlur={handleBlur('phonenumber')}
                                    value={values.phonenumber}
                                    placeholder="+84 782778712"
                                    label='Phone number'
                                    icon='Phone'
                                // Add styles as needed
                                />
                                {touched.phonenumber && errors.phonenumber && <Text style={styles.error}>{errors.phonenumber}</Text>}
                                <Button size='large' style={styles.button} onPress={() => handleSubmit} title="Send my code" />
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </Container>


    )


}

const getStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    container: {
        backgroundColor: THEME[theme].white,
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 96
    },
    row: {
        display:'flex',
        flexDirection: 'row'
    },
    signupText: {
        color: '#583EF2',
        fontWeight: '500'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 24,
        color: '#38385E',
        fontWeight: '400',
        textAlign: 'center'
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 28,
        lineHeight: 32,
        fontWeight: '700',
        color: '#1F126B',
        marginVertical: 16
    },
    formContainer: {
        marginTop: 24,
        borderWidth: 1,
        padding: 32,
        borderColor: '#EAEAFF',
        borderTopRightRadius: 32,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 4
    },
    button: {
        marginTop: 32,
        width: '100%',
        marginHorizontal: 'auto'
    },
    error: {
        fontSize: 14,
        color: '#F7658B'
    }
})


export default ResetPassword