import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

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
        path: "/sobre-nosotros",
        element: <AboutUs />,
      },
      {
        path: "/nuestro-equipo",
        element: <Team />,
      },

      {
        path: "/productos",
        element: <Products />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
