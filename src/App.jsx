import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Path from "./pages/Path";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "parcours",
        element: <Path />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
