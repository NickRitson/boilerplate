import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider  } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { store } from './redux/store';
import AppLayout from './views/AppLayout';
import HomePage from './views/HomePage';
import GamePage from './views/GamesPage';
import TechStackPage from './views/TechStackPage';
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
        element: <GamePage />,
        loader: async () => {
          return fetch(`https://api.rawg.io/api/developers?key=${import.meta.env.VITE_RAWG_API_KEY}`);
        },
      },
      {
        path: "/playground",
        element: <div>Playground</div>,
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
