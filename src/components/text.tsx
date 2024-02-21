import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

// Extend the TextProps interface to allow custom props if necessary
interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextProps['style'];
  type?: 'body-1' | 'body-2' | 'body-3' | 'body-4' | 'body-5' | 'header-1',
  weight?: 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5' | 'heading-6' | 
  'para-1' | 'para-2' | 'para-3' | 'para-4' | 'para-5' | 'para-6' 
}

const CustomText: React.FC<CustomTextProps> = ({children, style, ...rest}) => {
  return (
    <Text style={[styles.defaultStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    // Define your default styles here
    fontSize: 16,
    color: '#1F1F39',
    // Add any other default styles you want all text in your app to have
  },
  'body-1': {
    color: '#38385E'
  },
  'body-2': {
    color: '#78789D'
  },
  'body-3': {
    color: '#B8B8D2'
  },
  'body-4': {
    color: '#F4F3FD'
  },
  'body-5': {
    color: '#F9F9FB'
  },
  'header-1' : {
    color: '#1F1F39'
  },
});

CustomText.displayName = 'Text'

export default CustomText;
