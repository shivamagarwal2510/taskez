import { initializeApp } from "firebase/app"
import {getAuth, 
    
     GoogleAuthProvider, 
     createUserWithEmailAndPassword,
    signInWithEmailAndPassword
    } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_gde1F3kiiv9qykmFz4fyNUBhtQyhke4",
    authDomain: "taskez-114cf.firebaseapp.com",
    projectId: "taskez-114cf",
    storageBucket: "taskez-114cf.appspot.com",
    messagingSenderId: "880813109376",
    appId: "1:880813109376:web:ba816a44a970532571b665"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();


export const db= getFirestore();

export const createUserDocumentFromAuth = async(userAuth , additionalInformation={})=>{
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {username, email}= userAuth;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef,{
                username,
                email,
                createdAt,
                ...additionalInformation,
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword= async(email, password)=>{
    
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthUserWithEmailAndPassword= async(email, password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password);
}