import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
interface IProps {
    rightTxt?: string,
    placeholder?: string,
    backgroundColor?: string,
    showLine?: boolean,
    style?: any,
    onRightTxtPress?: () => void
    secureTextEntry?: boolean
}

interface IRef {
    getValue: () => string 
}

const Search = forwardRef<IRef, IProps>((props, ref) => {
    const {  style, placeholder, backgroundColor,secureTextEntry } = props
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
        <View style={[styles.input, { marginBottom: 7, backgroundColor: backgroundColor },style]}>
            <TextInput secureTextEntry={secureTextEntry} value={value} onChangeText={setValue} style={styles.txtInput} placeholder={placeholder} />
        </View>
    )
})

Search.defaultProps = {
    placeholder: '',
    backgroundColor: '#fff',
    secureTextEntry: false
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
    miniIcon: {
        marginLeft: 20,
        marginRight: 20
    },
    txtInput: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 16
    },
 
})

export default Search