import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider/AuthProvider";



const useAuth = () => {
    const Auth = useContext(AuthContext);
    return Auth;
}
export default useAuth;