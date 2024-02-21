import React from 'react';
import { TextInput, TextInputProps, View, StyleSheet } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  containerStyle?: object;
  // You can extend this interface with custom props as needed
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({containerStyle, ...props}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...props}
        style={[styles.textInput, props.style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Customization for the container view
    marginBottom: 10,
  },
  textInput: {
    // Default styles for the text input
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CustomTextInput;