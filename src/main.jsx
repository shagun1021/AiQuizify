import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index";
import "./index.css";
import Login from "./Login";
import Signup from "./Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard2 from "./Dashboard2";
import Question from "./Question";
import Quiz from "./Quiz";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import AllUser from "./AllUser";
import Like from "./Like";
import Reminder from "./Reminder";
import Nav from "./Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Nav",
    element: <Nav />,
    children: [
      {
        path: "",
        element: <Dashboard2 />,
      },
      {
        path: "Dashboard/Question",
        element: <Question />,
      },
      {
        path: "Quiz",
        element: <Quiz />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "Profile/EditProfile",
        element: <EditProfile />,
      },
      {
        path: "Dashboard/Question/EditProfile",
        element: <EditProfile />,
      },

      {
        path: "AllUser",
        element: <AllUser />,
      },
      {
        path: "Like",
        element: <Like />,
      },
      {
        path: "Reminder",
        element: <Reminder />,
      },
      {
        path: "Dashboard",
        element: <Dashboard2 />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
