import { createContext, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        name: 'Rakib Ahmed',
        institute: 'bhola college'
    })

    const authInfo = {
        user,
        setUser
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;