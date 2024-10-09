import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import FixturesPage from './pages/FixturesPage.jsx'
import InsideTournamentPage from './pages/InsideTournamentPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/fixtures",
        element: <FixturesPage />,
      },
      {
        path: "/",
        element: <FixturesPage />,
      },
      {
        path: "/insidetournament",
        element: <InsideTournamentPage />,
      },
    ],

  },
  {
    path: "*",
    element: <ErrorPage />

  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
