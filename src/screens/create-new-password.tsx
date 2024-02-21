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

const CreatePasswordScreen = () => {
    const theme = useColorScheme() || 'light';
    const width = Dimensions.get('window').width; //full width
    const styles = getStyles(theme);
    const navigation = useNavigation()
    // Validation schema using Yup
    const schema = Yup.object().shape({
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
        <Container>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={key} />
                    <Text style={styles.textHeader}>Create new password</Text>
                    <View >
                    <Text style={[styles.subtitle, {maxWidth: width * 0.9 }]}>
                    Please set a new and strong password                    </Text>
                    <View style={styles.row}>
                    </View>
                    </View>
                    
                </View>
                <View>

                    <Formik
                        initialValues={{ password: '', retypePassword: '' }}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            // Handle form submission here
                            Alert.alert('Login Submitted', JSON.stringify(values));
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={[styles.formContainer, { width: width * 0.9 }]}>
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
                            <Button size='large' style={styles.button} onPress={() => handleSubmit} title="Confirm" />
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


export default CreatePasswordScreen