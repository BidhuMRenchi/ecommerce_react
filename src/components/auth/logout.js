
import { useNavigate } from "react-router-dom";

const Logout = () => {

    localStorage.clear();
    const nav =useNavigate();
    return (
        nav("/")
        );
};

export default Logout;