import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import Layout from "./components/Layout";
import { createActorWithConfig } from "./config";
import { LanguageProvider } from "./i18n/LanguageContext";
import ArticoliPage from "./pages/ArticoliPage";
import ArticoloPage from "./pages/ArticoloPage";
import ChiSonoPage from "./pages/ChiSonoPage";
import HomePage from "./pages/HomePage";

const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const articoliRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/articoli",
  component: ArticoliPage,
});

const chiSonoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chi-sono",
  component: ChiSonoPage,
});

const articoloRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/articoli/$id",
  component: ArticoloPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  articoliRoute,
  chiSonoRoute,
  articoloRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  useEffect(() => {
    createActorWithConfig()
      .then((actor) => actor.initialize())
      .catch(console.error);
  }, []);

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
