import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/home";
import ErrorPage from "../pages/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
