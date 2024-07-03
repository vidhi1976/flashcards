import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Deck from './Deck.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/decks/:deckId",
    element: <Deck />,
  },
]);
import './index.css'
import { Header } from './Header.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />

    
  </React.StrictMode>,
)
