import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
    const {auth} = useAuth();
    console.log(auth)
    return (
        <div>
            <h1>HomePage</h1>
            <Link to="/me">Go to profile page</Link>
        </div>
    )
}

export default HomePage;