import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import App from "./app";
import { HomePage } from './pages/home';
import { ErrorPage } from './pages/error';
import { ProfilePage } from './pages/profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "profile",
        element: <ProfilePage />,
        children: [
          {
            path: ":id",
            element: <ProfilePage />
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
