
import { useNavigate } from "react-router-dom";

const Logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("id");
    const nav =useNavigate();
    return (
        nav("/")
        );
};

export default Logout;