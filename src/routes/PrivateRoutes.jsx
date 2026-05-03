import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

const PrivateRoutes = () => {
    const {auth} = useAuth();
    return (
        <>
        {
            auth?.user ? (
                <main className="mx-auto max-w-[1020px] py-8">
                    <div className="container">
                        <Outlet></Outlet>
                    </div>
                </main>
            ) : (
                <Navigate to="/login"/>
            )
        }
        </>
    )
};

export default PrivateRoutes;