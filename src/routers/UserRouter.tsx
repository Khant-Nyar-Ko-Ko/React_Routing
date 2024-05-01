import { Navigate, RouteObject } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import { AboutPage, CoursesPage, HomePage } from "../pages/user";

const UserRouter: RouteObject[] = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element:<Navigate to={'/home'}/> 
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
    ],
  },
];

export default UserRouter;
