import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

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
     
      {
        path: '/contacto',
        element: <Contact />,
      },
    ],
  },
]);


export default router