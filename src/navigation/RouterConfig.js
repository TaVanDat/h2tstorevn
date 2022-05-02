import React from "react";
import { ROOT, Products } from "./CONSTANT";
import { useRoutes } from 'react-router-dom'
import HomePage from "../pages/HomePage";
import Policy from "../pages/Policy";
import Bank from "../pages/Bank";
import GuidelinesPolicy from "../pages/guidelinesPolicy";
import Address from "../pages/Address";
import Hanoi from "../pages/Address/Hanoi";
import BacGiang from "../pages/Address/BacGiang";
import HaiPhong from "../pages/Address/HaiPhong";
import ThanhHoa from "../pages/Address/ThanhHoa";
import QuangNinh from "../pages/Address/QuangNinh";
import CaoBang from "../pages/Address/CaoBang";
import Login from "../pages/Login";
import Shirt from "../pages/Shirt";
import Account from "../pages/Account";
import NotFound from "../pages/NotFound";
import Detail from "../pages/ProductDetail";
import AoQuan from "../pages/Product/AoQuan";
import Category from "../pages/Product/Category";
import AllProduct from "../pages/Product";
import SearchPage from "../pages/SearchPage";
import Sale from "../pages/Product/Sale";
import Register from "../pages/Register";

const RouterConfig = () => {
    const routes = useRoutes([
        { path: `${ROOT}`, element: <HomePage /> },
        { path: '/notfound', element: <NotFound /> },
        { path: `/product/:id`, element: <Detail /> },
        // { path: `/news/:id`, element: <Detail /> },
        { path: `/collections/all`, element: <AllProduct /> },
        { path: `/collections/:page_link/:page_name`, element: <AoQuan /> },
        { path: `/search`, element: <SearchPage /> },
        { path: `/collections/category/:id/:page_name`, element: <Category /> },
        { path: `/collections/quan`, element: <div>products</div> },
        { path: `/account`, element: <Account /> },
        { path: '/account/login', element: <Login /> },
        { path: '/account/register', element: <Register /> },
        { path: '/collections/sale75/:page_link/:page_name', element: <Sale /> },
        { path: '/pages/hethongcuahang', element: <Address /> },
        { path: '/pages/cua-hang-ha-noi', element: <Hanoi /> },
        { path: '/pages/cua-hang-bac-giang', element: <BacGiang /> },
        { path: '/pages/cua-hang-hai-phong', element: <HaiPhong /> },
        { path: '/pages/cua-hang-thanh-hoa', element: <ThanhHoa /> },
        { path: '/pages/quang-ninh', element: <QuangNinh /> },
        { path: '/pages/cua-hang-cao-bang', element: <CaoBang /> },
        { path: '/pages/huong-dan-chinh-sach', element: <GuidelinesPolicy /> },
        { path: '/pages/chinh-sach-doi-tra', element: <Policy /> },
        { path: '/pages/tk-ngan-hang', element: <Bank /> },
        // /collections/all
        { path: `${Products}`, element: <Shirt /> }
    ])
    return routes
}
export default RouterConfig;