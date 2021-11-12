import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider";

const useAuth = () => {
    // init Auth Context
    return useContext(AuthContext);
}

export default useAuth;