import { StyleSheet, View, ViewStyle } from "react-native"


interface IProps  {
    children?: React.ReactNode;
    style?: ViewStyle;
}

const Card = ({children, style}: IProps) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        borderWidth: 2,
        borderColor: '#EAEAFF' ,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default Card