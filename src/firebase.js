import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDFbGADBceUt4gRU6ZQUzVQaWeKntG3aSU',
  authDomain: 'followmylead-collective-book.firebaseapp.com',
  databaseURL: 'https://followmylead-collective-book.firebaseio.com',
  projectId: 'followmylead-collective-book',
  storageBucket: '',
  messagingSenderId: '268614961518'
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const entriesRef = databaseRef.child('entries').limitToLast(1);
