import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(

  <StrictMode>

    <HelmetProvider>

      <ThemeProvider>

        <App />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />

      </ThemeProvider>

    </HelmetProvider>

  </StrictMode>

);