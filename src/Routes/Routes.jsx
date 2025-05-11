import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/MainLayout/Main";
import ViewDetails from "../Pages/Details/ViewDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <ViewDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/projects.json");
          const data = await res.json();
          return data.find((p) => p.id == params.id);
        },
      },
    ],
  },
]);
