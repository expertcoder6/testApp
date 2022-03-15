//---------- imports

// firebase 
import Firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database';

// create ref of the database
const usersReference = database()

//----- add data 
export const addDataToFirebase = (data) => {

    console.log('data of firebase:', data)
    usersReference.ref(`/users/${data.id}`).set({
        ...data
    })
}

//----- read all data from firebase storage
export const getAllUserDataFromFirebase = ({ call_back }) => {

    usersReference.ref('/users').once('value')

        // success    
        .then(snapshot => {

            // call back to previous component for update
            call_back({
                error: false,
                response: snapshot.val()
            });

        })

        // error
        .catch(err => {

            call_back({
                error: true,
                response: undefined
            })
        })
}