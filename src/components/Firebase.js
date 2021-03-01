import app from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_DATABASE,
    storageBucket:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    appId:process.env.REACT_APP_FIREBASE_SENDER_ID,
    measurementId:process.env.REACT_APP_FIREBASE_APP_ID
}
const firebase = app.initializeApp(config);
export default firebase