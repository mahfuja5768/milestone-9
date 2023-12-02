import AllNews from "../components/AllNews";
import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import Navbar from "../components/Navbar";
import RightSideNav from "../components/RightSideNav";



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <div className="">
           <div className="grid md:grid-cols-4 gap-6 my-5">
               <div className=""><LeftSideNav></LeftSideNav></div>
               <div className=" md:col-span-2"><AllNews></AllNews></div>
               <div className=""><RightSideNav></RightSideNav></div>
            </div>
           </div>
        </div>
    );
};

export default Home;