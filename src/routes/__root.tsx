import { AppSidebar } from "@/components/AppSidebar.tsx";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { isLocalHost } from "@/utils/env.ts";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <Outlet />
        </SidebarProvider>
      </ThemeProvider>
      {isLocalHost() ? <TanStackRouterDevtools /> : <></>}
    </>
  ),
});
