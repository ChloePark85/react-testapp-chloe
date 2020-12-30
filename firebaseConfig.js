import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyBs3_b3Nqz4ISws4CsaNdabzcE3xt7lfeU",
    authDomain: "react-testapp-chloe.firebaseapp.com",
    projectId: "react-testapp-chloe",
    storageBucket: "react-testapp-chloe.appspot.com",
    messagingSenderId: "874618375915",
    appId: "1:874618375915:web:1b74355c90bff0d725f8ae",
    measurementId: "G-K2V1R3R7CW",
    databaseURL: "https://react-testapp-chloe-default-rtdb.firebaseio.com/"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()