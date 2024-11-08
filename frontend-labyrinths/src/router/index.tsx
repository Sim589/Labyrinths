import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/home";
import ErrorPage from "../pages/errorPage";
import TemplatePage from "../pages/viteTemplate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/template",
    element: <TemplatePage />,
    errorElement: <ErrorPage />,
  },
]);
