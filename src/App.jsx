import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFountPage from "./pages/NotFountPage";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage></HomePage>} path="/" />
          <Route element={<ProfilePage></ProfilePage>} path="/me" />
        </Route>
        <Route element={<LoginPage></LoginPage>} path="/login" />
        <Route
          element={<RegistrationPage></RegistrationPage>}
          path="/register"
        ></Route>
        <Route element={<NotFountPage></NotFountPage>} path="*" />
      </Routes>
    </>
  );
}

export default App;
