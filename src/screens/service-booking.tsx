import AuthContainer from "@/components/auth-container"
import { Text, View } from "react-native"

interface IProps {
    service: string
}

const ServiceBooking = () => {
    // const {service} = props
    return (
        <AuthContainer>
            <Text>Service Booking</Text>
        </AuthContainer>
    )
}

export default ServiceBooking