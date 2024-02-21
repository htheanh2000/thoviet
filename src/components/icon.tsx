import Man from '@/assets/icons/man.svg'
import Phone from '@/assets/icons/phone.svg'
import Key from '@/assets/icons/key.svg'
import EyeOn from '@/assets/icons/eye-on.svg'
import EyeOff from '@/assets/icons/eye-off.svg'


const icons = {
    Man,Phone,Key,EyeOn,EyeOff
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