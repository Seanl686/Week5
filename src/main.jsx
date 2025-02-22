// React is the core library for building UI components
import React from "react";

// ReactDOM provides DOM-specific methods for rendering React components
import ReactDOM from "react-dom/client";

// React Router components for client-side routing:
// createBrowserRouter: Creates a router instance with browser history
// RouterProvider: Component that provides routing context to the app
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import the HomePage component that will be rendered at the root route
import { HomePage } from './pages/home';

// Create an error boundary component
const ErrorPage = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

// Select the root DOM node where the React app will be mounted
const root = document.getElementById("root");

// Configure the router with an array of route definitions
// Each route object specifies a path and the component to render
const router = createBrowserRouter([
  {
    path: "/", // Root path of the application
    element: <HomePage />, // Component to render at this path
    errorElement: <ErrorPage />,
    // Add basename if your app is not served from root
    // basename: "/your-app-base",
  }
]);

// Initialize the React application:
// 1. Create a root instance
// 2. Render the app wrapped in StrictMode and RouterProvider
ReactDOM.createRoot(root).render(
  <React.StrictMode> 
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
