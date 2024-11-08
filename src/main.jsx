import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import TechVisionBlog from './components/TechVisionBlog/TechVisionBlog';
import InnovationBlog from './components/InnovationBlog/InnovationBlog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/tech-vision",
        element: <TechVisionBlog></TechVisionBlog>
      },
      {
        path: "/blog/innovation",
        element: <InnovationBlog></InnovationBlog>
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
