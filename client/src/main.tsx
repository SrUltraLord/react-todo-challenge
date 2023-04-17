import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BoardPage } from "./pages/BoardPage"

import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <BoardPage /> },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
