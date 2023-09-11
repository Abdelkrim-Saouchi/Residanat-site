import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Biology from "./pages/Biology";
import Contact from "./pages/Contact";
import Fundamentals from "./pages/Fundamentals";
import Home from "./pages/Home";
import LessonPage from "./pages/LessonPage";
import Paths from "./pages/Paths";
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
        path: "paths",
        element: <Paths />,
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
        path: "paths/fundamentals",
        element: <Fundamentals />,
      },
      {
        path: "paths/pharmaceutical",
        element: <Pharmaceutical />,
      },
      {
        path: "paths/biology",
        element: <Biology />,
      },
      {
        path: "lessons/page",
        element: <LessonPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
