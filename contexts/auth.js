// http://100.27.22.255/
import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function useAuth(){
    const auth = useContext(AuthContext);
    if (!auth){
        throw new Error('Provide Auth Provider');
    }
    else{
        return auth;
    }
}

export function AuthProvider(props){
    const [state, setState] = useState({
        user:null,
        login,
        logout,
    });

    function login(username,password){
        const newState = {
            user:{
                username,
                password,
            }
        };

        setState(prevState=>({ ...prevState, ...newState }));
    }

    function logout(){
        const newState = {
            user: null
        };
        setState(prevState=>({ ...prevState, ...newState }));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}