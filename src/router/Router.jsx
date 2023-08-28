import { createBrowserRouter } from "react-router-dom";

import routes from "../utils/routes";
import RootLayout from "./RootLayout";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: routes.home.element },
      { path: routes.about.path, element: routes.about.element },
      { path: routes.menu.path, element: routes.menu.element },
      { path: routes.gallery.path, element: routes.gallery.element },
      { path: routes.reservations.path, element: routes.reservations.element },
      { path: routes.location.path, element: routes.location.element },
      { path: routes.styleGuide.path, element: routes.styleGuide.element },
    ],
  },
]);

export default router;
