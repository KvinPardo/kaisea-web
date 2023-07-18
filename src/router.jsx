import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/nosotros',
        element: <AboutUs />,
      },
      {
        path: '/equipo',
        element: <Team />,
      },
    ],
  },
]);


export default router