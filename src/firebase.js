import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDLkwwlkqWl7i3GzFzTTqJew9fKYUR5-k0',
  authDomain: 'fir-sample-a0882.firebaseapp.com',
  databaseURL: 'https://fir-sample-a0882.firebaseio.com',
  projectId: 'fir-sample-a0882',
  storageBucket: 'fir-sample-a0882.appspot.com',
  messagingSenderId: '1072850284445'
}
firebase.initializeApp(config)
export default firebase
