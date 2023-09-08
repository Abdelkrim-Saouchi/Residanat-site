import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Biology from "./pages/Biology";
import Contact from "./pages/Contact";
import Fundamentals from "./pages/Fundamentals";
import Home from "./pages/Home";
import Path from "./pages/Path";
import Pharmaceutical from "./pages/Pharmaceutical";
import Tech from "./pages/Tech";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "path",
        element: <Path />,
      },
      {
        path: "tech",
        element: <Tech />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "path/fundamentals",
        element: <Fundamentals />,
      },
      {
        path: "path/pharmaceutical",
        element: <Pharmaceutical />,
      },
      {
        path: "path/biology",
        element: <Biology />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
