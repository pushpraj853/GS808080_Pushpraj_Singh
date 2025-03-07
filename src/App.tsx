import { Route, Routes } from "react-router";
import ProtectedRouteWrapper from "./guards/ProtectedRouteWrapper.js";
import PublicRouteWrapper from "./guards/PublicRouteWrapper.js";
import { notFoundRoute, protectedRoutes, publicRoutes } from "./routes";
import ToasterWrapper from "./components/ToasterWrapper.js";

function App() {
  return (
    <>
      <ToasterWrapper />
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
    </>
  );
}

export default App;
