import auth from '@react-native-firebase/auth';
import { createUser } from './user';

interface ISignUp  {
    username: string,
    phonenumber: string // phonenumber: fake email for custom phonenumber/password auth method
    password: string
}

const signUp = async (props: ISignUp) => {
    const {username, password, phonenumber} = props;
    const email = phonenumber + '@thoviet.com'

    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
            console.log('User account created & signed in!');
                const newUser = {
                    username,
                    phonenumber
                }
               const response = await createUser(newUser)
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            return {
                success: false,
                message: error.code
            }
        });
}

const signOut = async () => {
   return auth().signOut()

}

export { signUp, signOut };
export type { ISignUp };
