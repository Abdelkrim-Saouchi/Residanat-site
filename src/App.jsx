import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LessonPage, { loader as lessonLoader } from "./pages/LessonPage";
import Paths, { loader as pathsLoader } from "./pages/Paths";

import PathPage, { loader as pathPageLoader } from "./pages/PathPage";
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
        loader: pathsLoader,
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
        path: "paths/:pathId",
        element: <PathPage />,
        loader: pathPageLoader,
      },
      {
        path: "paths/:pathId/:lessonId",
        element: <LessonPage />,
        loader: lessonLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
