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

const RouterConfig = () => {
    const routes = useRoutes([
        { path: `${ROOT}`, element: <HomePage /> },
        { path: `${Products}`, element: <div>products</div> },
        // { path: `/collections/all`, element: <div>products</div> },
        { path: '/account/login', element: <Login /> },
        { path: '/collections/sale75', element: <div>products</div> },
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
    ])
    return routes
}
export default RouterConfig;