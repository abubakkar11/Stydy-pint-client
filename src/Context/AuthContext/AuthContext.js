import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext();

const AuthContexts = ({children}) => {

    const user = {name : ' akash'}

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