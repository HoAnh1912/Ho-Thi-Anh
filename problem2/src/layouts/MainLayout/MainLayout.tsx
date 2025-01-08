import FallbackLoader from "elements/fallback-loader";
import { Suspense } from "react";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <main className="flex-1">
      <Suspense fallback={<FallbackLoader key={window.location.href} />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
