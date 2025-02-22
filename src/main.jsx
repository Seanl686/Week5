// React is the core library for building UI components
import React from "react";

// ReactDOM provides DOM-specific methods for rendering React components
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Routes, Route } from "react-router-dom";

// Import the HomePage component that will be rendered at the root route
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
        path: "",
        element: <HomePage />
      },
      {
        path: "profile/:id",
        element: <ProfilePage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
