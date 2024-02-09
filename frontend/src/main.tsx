import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { store } from './redux/store';
import AppLayout from './views/AppLayout';
import HomePage from './views/HomePage';
import GamePage from './views/GamePage';
import GamesPage from './views/GamesPage';
import TechStackPage from './views/TechStackPage';
import Playground from './views/Playground';
import SushiPage from './views/SushiPage';
import ComponentsPage from './views/ComponentsPage';
import './styles/index.css';
import TableGrid from './components/table-grid/TableGrid';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tech-stack",
        element: <TechStackPage />,
      },
      {
        path: "/components",
        element: <ComponentsPage />,
      },
      {
        path: "/components/:file",
        element: <TableGrid />,
      },
      {
        path: "/sushi",
        element: <SushiPage />,
      },
      {
        path: "/games",
        element: <GamesPage />,
        loader: async () => {
          return fetch(`https://api.rawg.io/api/developers?key=${import.meta.env.VITE_RAWG_API_KEY}`);
        },
      },
      {
        path: "/game/:id",
        element: <GamePage />,
        loader: async ({ params }) => {
          return await fetch(`https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_RAWG_API_KEY}`);
        },
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      // TODO: 404 page https://vercel.com/docs/projects/project-configuration#project/rewrites
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


