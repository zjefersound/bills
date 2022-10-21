import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { AddBill } from "../pages/AddBill";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-bill",
    element: <AddBill />,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
