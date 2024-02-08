import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Aboutus, SellerSite, Ecommerce } from "./Pages/PageIndex";
import { Container,Signup } from "./Components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0Provider
        domain="dev-dnukqkb3jd2urvo3.us.auth0.com"
        clientId="DdfqlFJPta6gvJzdstQ6g3ZpcMmNnhTs"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    ),
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
root.render(<RouterProvider router={router} />);
