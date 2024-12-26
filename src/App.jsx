import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./Layout/RouterLayout";
import { UseContextPage } from "./context/ContextApi";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./Router/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/home",
          element: (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <UseContextPage>
        <RouterProvider router={router} />
      </UseContextPage>
    </AuthProvider>
  );
};

export default App;
