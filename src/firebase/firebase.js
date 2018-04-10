import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBIkmGzfFebT0fLxvllQZ31XeL0meAzI8A",
    authDomain: "expensify-edd21.firebaseapp.com",
    databaseURL: "https://expensify-edd21.firebaseio.com",
    projectId: "expensify-edd21",
    storageBucket: "expensify-edd21.appspot.com",
    messagingSenderId: "997390728720"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
