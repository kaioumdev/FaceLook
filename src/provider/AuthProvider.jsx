import { useState } from "react";
import { AuthContex } from "../context"

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    return (
        <AuthContex.Provider value={{auth, setAuth}}>
            {children}
        </AuthContex.Provider>
    )
};

export default AuthProvider;