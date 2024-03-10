import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { signOut } from './auth';

const usersCollection = firestore().collection('Users');

const getUser = async () => {
    if(auth().currentUser) {
        const uid = auth().currentUser?.uid;
        const user = (await usersCollection.doc(uid).get()).data();
        if(!user) return null ;
        return user.data;
    }
    else return null
}

const createUser = async(data: any) => {
    if(auth().currentUser) {
        const uid = auth().currentUser?.uid;
        await usersCollection.doc(uid).set({
            data
        })
    }
}

const updateUserById = async(id: string, data: any) => {
    await usersCollection.doc(id).update({
        data
    });
}

const deleteUserById = async(id: string, data: any) => {
    await usersCollection.doc(id).delete();
}



export {getUser, createUser ,updateUserById, deleteUserById }