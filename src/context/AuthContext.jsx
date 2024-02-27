import { auth } from '../service/config'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.log("error creando el contexto de auth")
    }

    return context;
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if(!currentUser){
                setUser(null)
            }else{
                setUser(currentUser)
            }

            return () => suscribed
        })
    },[])

    const register = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider();
        return signInWithPopup(auth, responseGoogle);
    }

    const logout = async () => {
        const response = await signOut(auth);
    }

    return <authContext.Provider value={{ register, login, loginWithGoogle, logout, user }}>
        {children}
    </authContext.Provider>;
}