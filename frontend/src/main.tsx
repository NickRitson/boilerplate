import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { store } from './redux/store';
import AppLayout from './views/AppLayout';
import HomePage from './views/HomePage';
import GamePage from './views/GamePage';
import GamesPage from './views/GamesPage';
import TechStackPage from './views/TechStackPage';
import Playground from './views/Playground';
import './styles/index.css';

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


