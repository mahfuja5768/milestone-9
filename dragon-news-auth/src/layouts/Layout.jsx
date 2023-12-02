import { Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <div className="max-w-[1280px] mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;