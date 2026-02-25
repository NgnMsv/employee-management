import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/login/login.tsx";
import Dashboard from "../pages/dashboard/dashboard.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
