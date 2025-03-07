import { Route, Routes } from "react-router";
import ProtectedRouteWrapper from "./guards/ProtectedRouteWrapper.js";
import PublicRouteWrapper from "./guards/PublicRouteWrapper.js";
import { notFoundRoute, protectedRoutes, publicRoutes } from "./routes";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRouteWrapper redirectTo="/stores" />}>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRouteWrapper redirectTo="/login" />}>
        {protectedRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      <Route path={notFoundRoute.path} element={notFoundRoute.element} />
    </Routes>
  );
}

export default App;
