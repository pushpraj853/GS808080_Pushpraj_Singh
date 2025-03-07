import { Navigate, Outlet } from "react-router";
import { isUserAuthenticated } from "./helpers";

interface PubliRouteWrapperProps {
  redirectTo: string;
}
const PublicRouteWrapper: React.FC<PubliRouteWrapperProps> = ({ redirectTo }) => {
  const auth = isUserAuthenticated();

  return auth ? <Navigate replace to={redirectTo} /> : <Outlet />;
};

export default PublicRouteWrapper;
