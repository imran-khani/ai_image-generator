import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Generator from "./components/Generator";
import Login from "./components/Login";
import Layout from "./Layout/Layout";
import Error from "./components/Error";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "/generate", element: <Generator /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
};

export default App;
