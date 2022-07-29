import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const {currentUser} = useContext(UserContext);
   
  
    if (currentUser) {
      return <Outlet />;
    } else {
      return <Navigate to="/log-in" />;
    }
  };
  export default PrivateRoute;