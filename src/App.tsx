import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import useRouteElements from "./hooks/useRouteElements";

// Create a client

function App() {
  const { routeObject } = useRouteElements();
  const router = createBrowserRouter(routeObject as RouteObject[])

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </HelmetProvider>
  );
}
export default App;
