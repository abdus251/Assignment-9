import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import Statistics from "./components/Statixtics/Statistics";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Banner from "./components/Banner/Banner";
import Featured from "./components/Featured/Featured";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import NotFound from "./NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element: <Banner></Banner>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedJobs",
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch("jobs.json")
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      },
      {
        path: '/featured',
        element: <Featured></Featured>
      },
      {
        path: '*',
        element:<NotFound></NotFound> 
      }
    ]
  },
 

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);