import Login from "../pages/login/login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
