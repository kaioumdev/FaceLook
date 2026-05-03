import { useContext, useDebugValue } from "react"
import { AuthContex } from "../context"

export const useAuth = () => {
    const {auth} = useContext(AuthContex);
    useDebugValue(auth, auth => auth?.user ? "User Loged in" : "User Loged out");
    return useContext(AuthContex);
}