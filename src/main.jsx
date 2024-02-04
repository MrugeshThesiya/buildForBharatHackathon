import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Aboutus, SellerSite, Ecommerce } from "./Pages/PageIndex";
import { Container } from "./Components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "/About",
        element: <Aboutus />,
      },
      {
        path: "/SellerSite",
        element: <SellerSite />,
      },
      {
        path: "/Ecommerce",
        element: <Ecommerce />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);
