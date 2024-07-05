import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const DefaultLayoutPage = lazy(() => import('../layout/DefaultLayout'));

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>無此頁面</div>}>
        <DefaultLayoutPage />
      </Suspense>
    ),
  },
];

const router = createBrowserRouter(routes);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
