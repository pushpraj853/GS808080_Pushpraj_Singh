import Charts from "../pages/private/Charts";
import Planning from "../pages/private/Planning";
import Products from "../pages/private/Products";
import Stores from "../pages/private/Stores";
import Login from "../pages/public/Login";
import PageNotFound from "../pages/PageNotFound";

export const publicRoutes = [{ path: "/login", element: <Login /> }];

export const protectedRoutes = [
  { path: "/", element: <Stores /> },
  { path: "/stores", element: <Stores /> },
  { path: "/products", element: <Products /> },
  { path: "/planning", element: <Planning /> },
  { path: "/charts", element: <Charts /> },
];

// Catch-all route for 404 Not Found
export const notFoundRoute = { path: "*", element: <PageNotFound /> };
