import { MainLayout } from "layouts/MainLayout/MainLayout";
import RequireAuth from "layouts/requireAuth";
import blog from "./children/blog";
import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "pages/home";

const Routes = () => {
  const routes = useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          element: <RequireAuth />,
          children: [
            {
              path: "/blog",
              children: blog,
            },
          ],
        },
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ]);
  return routes;
};

export default Routes;
