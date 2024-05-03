import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./Routes/App.jsx";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import PageNotfound from "./components/PageNotfound.jsx";
import Home from "./Routes/Home.jsx";
import Bag from "./components/Bag.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/*",
        element: <PageNotfound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
