import React from "react";
import { ROOT, Login, ProductDetail, Products } from "./CONSTANT";
import { Link, useRoutes } from 'react-router-dom'
import HomePage from "../pages/HomePage";

const RouterConfig = () => {
    const routes = useRoutes([
        { path: `${ROOT}`, element: <HomePage /> },
        { path: `${Products}`, element: <div>products</div> }
    ])
    return routes
}
export default RouterConfig;