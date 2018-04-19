import firebase from './firebase';
import schema   from './schema';

const database = firebase.database(); //access the database from firebase

/**
 * Function returns a promise that fetches notifications 
 * from firebase and resolves it as a list
 */
const getNotifications = () => {
    return new Promise((resolve, reject) => {
        database.ref(schema.notifications).once('value')
        .then((snapshot) => {
            const obj = snapshot.val();

            let notifications = [];

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    notifications.push(
                        Object.assign({id: key}, obj[key])
                    );
                }
            }
            
            resolve(notifications);
        })
        .catch(error => reject(error));    
    });
}

export default {
    getNotifications,
}