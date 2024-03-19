import Man from '@/assets/icons/man.svg'
import Phone from '@/assets/icons/phone.svg'
import Key from '@/assets/icons/key.svg'
import EyeOn from '@/assets/icons/eye-on.svg'
import EyeOff from '@/assets/icons/eye-off.svg'
import Hamburger from '@/assets/icons/hamburger.svg'
import Search from '@/assets/icons/search.svg'
import Home from '@/assets/icons/home.svg'
import Clean from '@/assets/icons/clean.svg'
import Repair from '@/assets/icons/repair.svg'
import Pest from '@/assets/icons/pest.svg'
import Food from '@/assets/icons/food.svg'
import Laundry from '@/assets/icons/laundry.svg'
import Back from '@/assets/icons/back.svg'
import BackPurple from '@/assets/icons/back-purple.svg'
import Calendar from '@/assets/icons/calendar.svg'
import Time from '@/assets/icons/time.svg'
import Location from '@/assets/icons/location.svg'
import Star from '@/assets/icons/star.svg'
import Checkbox from '@/assets/icons/checkbox.svg'
import Edit from '@/assets/icons/edit.svg'

const icons = {
    Man,Phone,Key,EyeOn,EyeOff,Hamburger,Search, Home , 
    Clean, Repair, Pest, Food, Laundry, Back,Calendar, Time,
    Location, Star, Checkbox, BackPurple, Edit
}

export type IconName  = keyof typeof icons

export type IconProps = {
    name: IconName,
    style?: Object
}
const Icon = ({name,style}: IconProps) => {
    const IconSVG = icons[name];
    return (
        <IconSVG style={style}/>
    )
}

export default Icon; 