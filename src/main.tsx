import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ContactFormWithSocialButtons from "./Contact";
import "./index.css";
import Login from "./Login";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <ContactFormWithSocialButtons />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
