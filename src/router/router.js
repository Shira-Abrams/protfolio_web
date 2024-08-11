import React from "react";
import {createBrowserRouter } from "react-router-dom";
import BlogList from "../components/BlogList";
import Layout from "./Layout";
// import Layout from "./Layout.js";
export const router = createBrowserRouter([
    {
          path:'/',
          element:<Layout/>
    },
    {
        path:'all-blogs',
        element:<BlogList/>,
        
    }
])