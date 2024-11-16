import Navigation from "@/components/Navigation";
import { isLocalHost } from "@/utils/env";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Outlet />
      {isLocalHost() ? <TanStackRouterDevtools /> : <> </>}
    </>
  ),
});
