import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet,  useColorScheme, View } from 'react-native'
import logo  from '@/assets/images/logo_icon.png'
import {  THEME } from '@/constant/color'
import { Formik } from 'formik'
import Button from '@/components/button'
import * as Yup from 'yup';
import Text from '@/components/text'
import TextInput from '@/components/text-input'

const SignUpScreen = () => {
    const theme = useColorScheme() || 'light';
    const styles = getStyles(theme);

    // Validation schema using Yup
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
        .email("Invalid email.")
        .required("Email must be provided."),
        password: Yup.string()
        .required("Password must be provided.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})/,
          "Password must be minimum 6 and maximum 12 characters."
        )
     });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.textHeader}>Sign up</Text>
                <Text style={styles.subtitle}>Please enter your details to sign up and create an account.</Text>
            </View>

            <View>
            <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // Handle form submission here
        Alert.alert('Login Submitted', JSON.stringify(values));
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            // Add styles as needed
          />
          {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
          
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            secureTextEntry // Hide password input
            // Add styles as needed
          />
          {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
          
          <Button onPress={() => handleSubmit} title="Login" />
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
        justifyContent: 'center',
        alignItems: 'center'
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
        fontSize: 14,
        lineHeight: 24,
        color: '#38385E',
        maxWidth: 300,
        textAlign: 'center'
    },
    textHeader: {
        textAlign:'center',
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        marginVertical: 16
    }
})





export default SignUpScreen