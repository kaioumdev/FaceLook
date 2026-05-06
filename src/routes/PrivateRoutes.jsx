import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";
import ProfileProvider from "../provider/ProfileProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.authToken ? (
        <>
          {" "}
          <Header></Header>
          <ProfileProvider>
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet></Outlet>
              </div>
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
