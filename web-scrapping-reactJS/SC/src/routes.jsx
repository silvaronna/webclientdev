// Module
import { createBrowserRouter } from "react-router-dom";
// Pages
import LandingPages from "./pages/landingPages";
import Contact from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <LandingPages />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
