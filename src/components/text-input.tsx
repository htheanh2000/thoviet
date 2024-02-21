import React, { useState } from 'react';
import { TextInput, TextInputProps, View, StyleSheet, ViewStyle } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon, { IconName } from './icon';
import Text from './text';

interface CustomTextInputProps extends TextInputProps {
    style?: ViewStyle;
    label?: string;
    icon?: IconName;
    placeholder?: string;
    secureTextEntry?: boolean
    // You can extend this interface with custom props as needed
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ style, label, icon, placeholder = '', secureTextEntry = false, ...props }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
            <View style={[styles.container, style]}>
                {label && <Text style={styles.label}>{label}</Text>}
                <View style={styles.textInputView}>
                    {icon && <Icon style={styles.icon} name={icon} />}
                    <TextInput
                        {...props}
                        autoCorrect={false}
                        autoFocus={true}
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        placeholderTextColor='#B8B8D2'
                        style={[styles.textInput]}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry && !isVisible}
                    />
                    {secureTextEntry &&
                    <View style={styles.rightIcon} >
                        <TouchableOpacity  onPress={() => setIsVisible(!isVisible)}>
                            <Icon name={!isVisible ? 'EyeOn' : 'EyeOff'} />
                        </TouchableOpacity>
                    </View>
                    }
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // Customization for the container view
        display: 'flex',
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },
    textInputView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingVertical: 8,
        borderBottomColor: '#EAEAFF',
        borderBottomWidth: 1,
        position:'relative'
    },
    icon: {
        marginRight: 12
    },
    rightIcon: {
        position: 'absolute',
        right: 0,
        bottom: 8
    },
    textInput: {
        // Default styles for the text input
        borderColor: 'transparent',
        fontSize: 16,
        fontWeight: '500',
        color: '#38385E',
    },
});

export default CustomTextInput;