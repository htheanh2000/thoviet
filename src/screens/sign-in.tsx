import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, Image, StyleSheet, TouchableHighlight, useColorScheme, View } from 'react-native'
import logo from '@/assets/images/logo_icon.png'
import { THEME } from '@/constant/color'
import { Formik } from 'formik'
import Button from '@/components/button'
import * as Yup from 'yup';
import Text from '@/components/text'
import TextInput from '@/components/text-input'
import { GestureHandlerRootView, NativeViewGestureHandler, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
    const theme = useColorScheme() || 'light';
    const width = Dimensions.get('window').width; //full width
    const styles = getStyles(theme);
    const navigation = useNavigation()
    // Validation schema using Yup
    const LoginSchema = Yup.object().shape({
        phonenumber: Yup.string()
            .required("Phone number must be provided."),
        password: Yup.string()
            .required("Password must be provided.")
            .matches(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}":;'<>?,./]).{8,}$/,
                "Password must have at least 8 characters including 1 uppercase letter, 1 special character and alphanumeric characters"
            )
        ,

    });

    return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logo} />
                    <Text style={styles.textHeader}>Sign in</Text>
                    <View >
                    <Text style={[styles.subtitle]}>
                        Welcome back!
                    </Text>
                    <View style={styles.row}>
                    <Text style={[styles.subtitle]}>
                        Don’t have an account ?
                    </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('sign-up' as never)}>
                        <Text style={[styles.subtitle, styles.signupText]}> Sign up</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    
                </View>
                <View>

                    <Formik
                        initialValues={{ phonenumber: '', password: '' }}
                        validationSchema={LoginSchema}
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
                                    icon='Man'
                                // Add styles as needed
                                />
                                {touched.phonenumber && errors.phonenumber && <Text style={styles.error}>{errors.phonenumber}</Text>}

                                <TextInput
                                    style={{ marginTop: 24 }}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder="Password"
                                    secureTextEntry // Hide password input
                                    icon='Key'
                                    label='Your password'
                                // Add styles as needed
                                />
                                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                                <Button size='large' style={styles.button} onPress={() => handleSubmit} title="Sign In" />
                            </View>
                        )}
                    </Formik>
                </View>
            </View>

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
        maxWidth: 300,
        fontWeight: '400',
        textAlign: 'center'
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 28,
        lineHeight: 32,
        fontWeight: '700',
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





export default SignInScreen