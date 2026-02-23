import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
    const token = localStorage.getItem("auth_token");

    if (token) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default PublicRoute;
