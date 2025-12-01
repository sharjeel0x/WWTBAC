import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Menu from "./pages/Menu";
import Landing from "./pages/Landing";
import Score from "./pages/Score";
import Game from "./pages/Game";
import Select from "./pages/Select";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Landing />,
      },

      {
        path: "/menu",
        element: <Menu />,
      },

       {
        path: "/select",
        element: <Select/>,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/score",
        element: <Score />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
