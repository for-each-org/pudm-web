import firebase from './firebase';
import schema   from './schema';

const database = firebase.database(); //access the database from firebase

/**
 * Function returns a promise that fetches notifications 
 * from firebase and resolves it as a list, sorted by time descending
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

            notifications.sort((a, b) => {
                if (a.time > b.time) return -1;
                if (a.time < b.time) return 1;
                return 0;
            });
            
            resolve(notifications);
        })
        .catch(error => reject(error));    
    });
};

/**
 * Function returns a promise that fetches groups 
 * from firebase and resolves it as a list
 */
const getGroups = () => {
    //ASSUMPTION : The groups are stored perfectly as an array in firebase
    return new Promise((resolve, reject) => {
        database.ref(schema.groups).once('value')
        .then((snapshot) => {
            const groups = snapshot.val();
            if(!Array.isArray(groups)) {
                reject("Groups is not stored as an array in firebase");
            }
            resolve(groups);
        })
        .catch(error => reject(error));    
    });
};

export default {
    getNotifications,
    getGroups,
}