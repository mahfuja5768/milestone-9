import Header from "../components/Header";
import Navbar from "../components/Navbar";
import NewsDetails from "../components/NewsDetails";
import RightSideNav from "../components/RightSideNav";


const DetailsPage = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
            <div className=" col-span-3"><NewsDetails></NewsDetails></div>
            <RightSideNav></RightSideNav>
        </div>
        </div>
        
    );
};

export default DetailsPage;