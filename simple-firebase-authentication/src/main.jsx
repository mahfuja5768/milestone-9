import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Home2 from "./components/Home2";
import Login2 from "./components/Login2";
import Register2 from "./components/Register2";
import AuthProvider from "./ProviderContext/providers/AuthProvider";
import SecretInfo from "./components/SecretInfo";
import PrivateRoute from "./components/routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/home2",
        element: <Home2></Home2>,
      },
      {
        path: "/login2",
        element: <Login2></Login2>,
      },
      {
        path: "/register2",
        element: <Register2></Register2>,
      },
      {
        path: "/secInfo",
        element: <PrivateRoute><SecretInfo></SecretInfo></PrivateRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
