import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Biology, { loader as biologyLoader } from "./pages/Biology";
import Contact from "./pages/Contact";
import Fundamentals, {
  loader as fundamentalsLoader,
} from "./pages/Fundamentals";
import Home from "./pages/Home";
import LessonPage, { loader as lessonLoader } from "./pages/LessonPage";
import Paths, { loader as pathsLoader } from "./pages/Paths";
import Pharmaceutical, {
  loader as pharmaceuticalLoader,
} from "./pages/Pharmaceutical";
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
        element: <Fundamentals />,
        loader: fundamentalsLoader,
      },
      {
        path: "paths/:pathId",
        element: <Pharmaceutical />,
        loader: pharmaceuticalLoader,
      },
      {
        path: "paths/:pathId",
        element: <Biology />,
        loader: biologyLoader,
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
