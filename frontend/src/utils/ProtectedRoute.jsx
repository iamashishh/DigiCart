import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const user = useSelector((state) => state.auth?.usertoken?.user?.role); 
//   console.log(user);
  

  if (user !== "admin") { 
    return <Navigate to="/" replace />;  
  }

  return children;
};

export default ProtectedRoute;
