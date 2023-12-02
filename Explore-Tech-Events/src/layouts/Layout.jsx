import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";


const Layout = () => {

    const location = useLocation();

    useEffect(()=>{
        if(location.pathname === '/'){
            document.title = `Explore-Tech-Events/home`
        }
        else{
            document.title = `Explore-Tech-Events ${location.pathname}`

        }
        if(location.state){
            document.title = `${location.state}`
        }
    })

    return (
        <div className="font-inter">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;