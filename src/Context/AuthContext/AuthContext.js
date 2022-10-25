import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {getAuth} from "firebase/auth";
import app from '../../firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthContexts = ({children}) => {
    const [user , setUser] = useState({name : 'akash'});



   const userInfo = {user}
    
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContexts;