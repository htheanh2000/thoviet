import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Icon from './icon'
interface IProps {
    placeholder?: string,
    backgroundColor?: string,
    style?: any,
}

interface IRef {
    getValue: () => string 
}

const Search = forwardRef<IRef, IProps>((props, ref) => {
    const {  style, placeholder, backgroundColor } = props
    const [value, setValue] = useState<string>('')
    const getValue = () => {
       return  value
    }
    useImperativeHandle(
        ref,
        () => ({
            getValue,
        }),
        [value],
    )
    return (
        <View style={[styles.input, { backgroundColor: backgroundColor },style]}>
            <Icon style={styles.icon} name={'Search'} />
            <TextInput value={value} onChangeText={setValue} style={styles.txtInput} placeholder={placeholder} />
        </View>
    )
})

Search.defaultProps = {
    placeholder: '',
    backgroundColor: '#fff',
}


const styles = StyleSheet.create({
    input: {
        height: 48,
        width: '100%',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txtInput: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8
    },
    icon: {
        marginLeft: 12
    },
 
})

export default Search