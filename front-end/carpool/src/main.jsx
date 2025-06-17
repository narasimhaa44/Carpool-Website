import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form.jsx";
import Login from "./components/Login.jsx";
import App from "./App.jsx";
import OfferRide from "./components/OfferRide.jsx";
import Signup from "./components/Signup.jsx";
import Confirm from "./components/confirm.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/ride",
    element: <OfferRide />,
  },
  {
    path: "/book",
    element: <Confirm />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
