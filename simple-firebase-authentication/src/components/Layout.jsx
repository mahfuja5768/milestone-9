import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Layout = () => {
    return (
        <div className="max-w-[1280px] mx-auto my-12">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;