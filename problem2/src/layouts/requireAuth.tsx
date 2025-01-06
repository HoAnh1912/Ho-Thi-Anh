import { Outlet } from "react-router";

const RequireAuth = () => {
  // if (!TokenService.getLocalAccessToken()) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};

export default RequireAuth;
