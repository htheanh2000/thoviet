// Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

// Define the props types
interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: object;
  textStyle?: object;
  type?: 'primary' | 'secondary' ;
  size?: 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle,size= 'medium', type='primary' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styles[type], styles[size] ,style ]}>
      <Text style={[styles.text, styles[`text-${type}`], textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Default styles for the button
const styles = StyleSheet.create({
  button: {
    
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700'
  },
  'text-primary': {
    color: '#ffffff',
  },
  'text-secondary': {
    color: '#78789D'
  },
  primary: {
    backgroundColor: '#583EF2'
  },
  secondary: {
    backgroundColor: '#F9F9FB'
  },
  medium: {
    width: 145,
    height: 50,
  },
  large: {
    width: 290,
    height: 50,
  }
});

export default Button;
