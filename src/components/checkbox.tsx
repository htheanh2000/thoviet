import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from './icon';


interface IProps {
    value: Boolean,
    onValueChange?: () => void,
    style?: any,
}

const Checkbox = ({ value , onValueChange, style }: IProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={onValueChange}
      style={[styles.conntainer, {backgroundColor: value ? '#583EF2' : '#EAEAFF' },style]}
    >
      {value && (
        <Icon name='Checkbox'/>
      )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    conntainer: {
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    }
})

export default Checkbox;
