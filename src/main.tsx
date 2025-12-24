import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

//import BrowserRouter from react router
import { BrowserRouter } from "react-router";

//import QueryClient and QueryClientProvideer from react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//init QueryClient
const queryClient = new QueryClient();

//import AuthProvider
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
