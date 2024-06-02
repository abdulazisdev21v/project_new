import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../pagesSide/components/layout/LayoutSide";
import HomePage from "../pagesSide/pages/HomePage";
import AboutPage from "../pagesSide/pages/AboutPage";
import LayoutAdmin from "../pagesAdmin/components/layout/LayoutAdmin";
import DashboardPage from "../pagesAdmin/components/pages/DashboardPage";
import SettingsPage from "../pagesAdmin/components/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSide />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/admin/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
