// Import React library - required for JSX syntax and React functionality
import React from "react";

// Import ReactDOM - provides methods to render React components in the browser
import ReactDOM from "react-dom/client";

// Import routing components from react-router:
// - BrowserRouter: Enables client-side routing
// - Routes: Container for multiple Route components
// - Route: Defines a route mapping between URL paths and components
import { BrowserRouter, Routes, Route } from "react-router";

// Import page components
// App: The main application component (root component)
import App from "./app";
// HomePage: The component to be displayed at the root URL path
import { HomePage } from './pages/home';

// Get reference to the DOM element with id="root"
// This is where our React application will be mounted
const root = document.getElementById("root");

// Create a React root using the DOM element and render the application
ReactDOM.createRoot(root).render(
  // BrowserRouter wraps the app to enable client-side routing
  <BrowserRouter>
    {/* Routes component groups all route definitions */}
    <Routes>
      {/* Route defines the mapping of path "/" to HomePage component */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
