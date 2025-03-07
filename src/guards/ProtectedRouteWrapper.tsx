import { Navigate, Outlet } from "react-router";
import { isUserAuthenticated } from "./helpers";

interface ProtectedRouteWrapper {
  redirectTo: string;
}
const ProtectedRouteWrapper: React.FC<ProtectedRouteWrapper> = ({ redirectTo }) => {
  const auth = isUserAuthenticated();

  return auth ? <Outlet /> : <Navigate replace to={redirectTo} />;
};

export default ProtectedRouteWrapper;
