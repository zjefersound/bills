import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { AddBill } from "../pages/AddBill";
import { EditBill } from "../pages/EditBill";
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
  {
    path: "/edit-bill/:id",
    element: <EditBill />,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
