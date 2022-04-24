import React from "react";
import { ROOT, Login, ProductDetail, Products } from "./CONSTANT";
import { Link, useRoutes } from 'react-router-dom'
import HomePage from "../pages/HomePage";
import Shirt from "../pages/Shirt";

const RouterConfig = () => {
    const routes = useRoutes([
        { path: `${ROOT}`, element: <HomePage /> },
        { path: `${Products}`, element:<Shirt/> }
    ])
    return routes
}
export default RouterConfig;