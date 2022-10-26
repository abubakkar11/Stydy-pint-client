import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthContexts = ({ children }) => {
    const [user, setUser] = useState();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current ', currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, []);

    const createUserWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const createUserWithGitHub = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }
    const updateProfiles = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const sendEmailVerify = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    const userInfo = {
        user,
        createUser,
        logOut,
        signIn,
        createUserWithGitHub,
        sendEmailVerify,
        createUserWithGoogle,
        updateProfiles,
    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContexts;