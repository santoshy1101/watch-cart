import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
    const isAuth = useSelector((store)=>store.authReducer.isAuth)
    const loaction = useLocation()

    if(!isAuth){
        return <Navigate to="/login" state={loaction.pathname} replace/>
    }
    return children
};

export default ReqAuth;
