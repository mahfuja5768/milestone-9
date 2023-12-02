import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EventDetails from "../components/EventDetails";
import SelectedEvents from "../components/SelectedEvents";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";

import MoreEvents from "../pages/MoreEvents";
import Blog from "../pages/Blog";

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
        path: "/about",
        element: <About></About>
      },
      {
        path: "/moreEvents",
        element: <MoreEvents></MoreEvents>
      },

      {
        path: "/eventDetails/:id",
        loader: () => fetch("../events.json"),
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/selectedEvent",
        loader: () => fetch("../events.json"),
        element: <PrivateRoute><SelectedEvents></SelectedEvents>,</PrivateRoute>
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
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },
    ],
  },
]);

export default router;
