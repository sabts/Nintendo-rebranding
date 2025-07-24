import { Navigate, Outlet } from "react-router";

const PrivateRoutes = ({
    redirectPath = '/'
}) => {
    const user = localStorage.getItem('user')
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default PrivateRoutes;