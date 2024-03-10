import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const usersCollection = firestore().collection('Users');

const getUserById = async (id: string) => {
    const user = await usersCollection.doc(id).get();
    return user
}

const createUser = async(data: any) => {
    if(auth().currentUser) {
        const uid = auth().currentUser?.uid;
        return await usersCollection.doc(uid).set({
            data
        });
    }
    else {
        throw('Not found current user')
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



export {getUserById, createUser ,updateUserById, deleteUserById }