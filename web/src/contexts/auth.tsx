import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";

import { api } from '../services/api';

type User = {
    id: string;
    login: string;
    avatar_url: string;
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
}

// Sintax to create and export a context in react using ts
export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode;
}

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

export function AuthProvider(props: AuthProvider) {
    const [user, setUser] = useState<User | null>(null)

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=c3a108968c3848ceb58f&redirect_uri=http://localhost:3000`;

    async function signIn(githubCode: string) {
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode,
        })

        const { token, user } = response.data

        localStorage.setItem('@dowhile:token', token)

        setUser(user)
    }
    
    useEffect(() => {
        const token = localStorage.getItem('@dowhile:token')

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`; 

            api.get<User>('profile').then(response => {
                setUser(response.data)
            })
        }
        
    }, [])

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code');

        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=');
        
            // Clear url in order to hide provided code (empty params, empty url, urlWithoutCode)
            window.history.pushState({}, '', urlWithoutCode);

            signIn(githubCode)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signInUrl, user }}>
            {props.children}
        </AuthContext.Provider>
    ); 
}
