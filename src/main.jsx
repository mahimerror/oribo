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
import Service_page from './components/Service_page/Service_page';
import Contact from './components/Contact/Contact';
import Protfolio from './components/Protfolio/Protfolio';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Blogs from './components/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Service_page></Service_page>
      },
      {
        path: "/protfolio",
        element: <Protfolio></Protfolio>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
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
