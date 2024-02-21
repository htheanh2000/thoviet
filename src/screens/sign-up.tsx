import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, Image, StyleSheet, useColorScheme, View } from 'react-native'
import logo from '@/assets/images/logo_icon.png'
import { THEME } from '@/constant/color'
import { Formik } from 'formik'
import Button from '@/components/button'
import * as Yup from 'yup';
import Text from '@/components/text'
import TextInput from '@/components/text-input'
import Icon from '@/components/icon'

const SignUpScreen = () => {
    const theme = useColorScheme() || 'light';
    const width = Dimensions.get('window').width; //full width
    const styles = getStyles(theme);

    // Validation schema using Yup
    const LoginSchema = Yup.object().shape({
        name: Yup.string().required('Name must be provided'),
        email: Yup.string()
            .email("Invalid email.")
            .required("Email must be provided."),
        password: Yup.string()
            .required("Password must be provided.")
            .matches(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}":;'<>?,./]).{8,}$/,
                "Password must have at least 8 characters including 1 uppercase letter, 1 special character and alphanumeric characters"
            )
            ,
        retypePassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Confirming your password is required'),

    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.textHeader}>Sign up</Text>
                <Text style={[styles.subtitle, {maxWidth: width * 0.9 }]}>Please enter your details to sign up and create an account.</Text>
            </View>
            <View>

                <Formik
                    initialValues={{ email: '', password: '', name: '', retypePassword: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => {
                        // Handle form submission here
                        Alert.alert('Login Submitted', JSON.stringify(values));
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={[styles.formContainer, { width: width * 0.9 }]}>

                            <TextInput
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                placeholder="John Smith"
                                label='Your name'
                                icon='Man'
                            // Add styles as needed
                            />
                            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

                            <TextInput
                                style={{ marginTop: 24 }}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="Email"
                                label='Your email'
                                icon='Man'
                            // Add styles as needed
                            />
                            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
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

                            <TextInput
                                style={{ marginTop: 24 }}
                                onChangeText={handleChange('retypePassword')}
                                onBlur={handleBlur('retypePassword')}
                                value={values.retypePassword}
                                placeholder="Re-type Password"
                                secureTextEntry // Hide password input
                                icon='Key'
                                label='Retype your password'
                            // Add styles as needed
                            />
                            {touched.retypePassword && errors.retypePassword && <Text style={styles.error}>{errors.retypePassword}</Text>}
                            <Button size='large' style={styles.button} onPress={() => handleSubmit} title="Sign Up" />
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
        paddingTop: 48
    },
    logo: {
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
        textAlign: 'center'
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 'bold',
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





export default SignUpScreen