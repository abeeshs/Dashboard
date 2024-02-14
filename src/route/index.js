import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Body = () => {
   const appRouter = createBrowserRouter([
      {
         path: "/",
         element: <Dashboard />,
      },
      {
         path: "/signup",
         element: <Register />,
      },
      {
         path: "/login",
         element: <Login />,
      },
   ]);
   return (
      <div>
         <RouterProvider router={appRouter} />
      </div>
   );
};

export default Body;
