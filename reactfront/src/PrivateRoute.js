import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({component:Component, ...prop}) => {
    const auth = true

    return auth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute