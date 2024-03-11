import AuthContainer from "@/components/auth-container"
import Icon from "@/components/icon"
import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import FullHouseCleanImage from "@/assets/images/fullhouse_clean.png"
import DatePicker from 'react-native-date-picker'
import { useState } from "react"
import Button from "@/components/button"
import { formatDate } from "@/utils/date"
import CustomTextInput from "@/components/text-input"

interface IProps {
    service: string
}

const ServiceBooking = () => {
    // const {service} = props
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [time, setTime] = useState(new Date())
    const [timeOpen, setTimeOpen] = useState(false)

    const [location, setLocation] = useState("")
    const [note, setNote] = useState("")

    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack();
    }

    return (
        <AuthContainer>
            <ScrollView>
                <View style={styles.header}>
                    <SafeAreaView>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={goBack}>
                                <Icon name="Back"></Icon>
                            </TouchableOpacity>
                            <Text style={styles.title}>Pick a service</Text>
                            <Icon style={{ opacity: 0 }} name="Back"></Icon>
                        </View>
                        <View style={styles.serviceView}>
                            <Image source={FullHouseCleanImage} />
                            <View style={styles.serviceDetail}>
                                <Text style={styles.price}>12.5$/hours</Text>
                                <Text style={styles.serviceName}>Full house Cleaning</Text>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionText}>
                        This pack includes cleaning all floors, removing trash.
                    </Text>
                </View>

                <View style={styles.datePickerView}>
                    <View>
                        <Text style={styles.label}>Working day</Text>
                        <TouchableOpacity onPress={() => setOpen(true)} style={styles.input}>
                            <Icon name="Calendar"></Icon>
                            <Text style={styles.inputText}>{formatDate(date)}</Text>
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode="date"
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Start Time</Text>
                        <TouchableOpacity onPress={() => setTimeOpen(true)} style={styles.input}>
                            <Icon name="Time"></Icon>
                            <Text style={styles.inputText}>{time.getHours()}:{time.getMinutes()}</Text>
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            mode="time"
                            open={timeOpen}
                            date={time}
                            onConfirm={(time) => {
                                setTimeOpen(false)
                                setTime(time)
                            }}
                            onCancel={() => {
                                setTimeOpen(false)
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Location</Text>
                        <View style={styles.input}>
                            <Icon name="Location"></Icon>
                            <TextInput value={location} onChangeText={setLocation} style={styles.locationInput} placeholder="S305 Vinhome Grandpark" />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.label}>Note</Text>
                        <View style={styles.noteView}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                value={note} onChangeText={setNote} style={styles.note}
                                 placeholder="Anything for us to notice?
                                 Eg: Bathroom needs harder clean" />
                        </View>
                    </View>
                </View>
                <View style={styles.workerView}>
                    <View style={styles.row}>
                       <Text style={styles.label}>Available worker</Text>

                    </View>
                </View>
                <View style={{ height: 80 }}></View>

            </ScrollView>
        </AuthContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#6E6BE8',
        borderBottomRightRadius: 45,
        borderBottomLeftRadius: 45,
        paddingTop: 16,
        paddingHorizontal: 24
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500'
    },
    serviceView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 32,
    },
    serviceDetail: {
        marginLeft: 24,
    },
    price: {
        color: '#fff',
        fontSize: 18,
        borderWidth: 1,
        padding: 4,
        textAlign: 'center',
        borderColor: "#fff",
        borderRadius: 4,
        fontWeight: '500'
    },
    serviceName: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '500',
        maxWidth: 160,
        marginTop: 16
    },
    descriptionView: {
        marginTop: 16,
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: '#EAEAFF',
        padding: 16,
        borderRadius: 16
    },
    descriptionText: {
        fontSize: 18,
        color: '#38385E'

    },
    datePickerView: {
        marginHorizontal: 24
    },
    label: {
        fontSize: 16,
        marginVertical: 16,
        fontWeight: '500',
    },
    input: {
        borderBottomWidth: 2,
        borderColor: '#EAEAFF',
        paddingBottom: 8,
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    noteView: {
        borderBottomWidth: 2,
        borderColor: '#EAEAFF',
        paddingBottom: 8,
    },
    inputText: {
        marginLeft: 16,
        fontSize: 18
    },
    locationInput: {
        marginLeft: 16,
        fontSize: 16
    },
    note: {
        fontSize: 16
    },
    workerView: {
        marginHorizontal: 24
    }
})

export default ServiceBooking