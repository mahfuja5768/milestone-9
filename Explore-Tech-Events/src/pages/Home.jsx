import Banner from "../components/Banner";
import ConferenceInfo from "../components/ConferenceInfo";
import FeaturedEvents from "../components/UpcomingEvents";
import Footer from "../components/Footer"
import EventSchedule from "../components/EventSchedule";
import Speakers from "../components/Speakers";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ConferenceInfo></ConferenceInfo>
            <FeaturedEvents></FeaturedEvents>
            <EventSchedule></EventSchedule>
            <Speakers></Speakers>
            <Footer></Footer>
        </div>
    );
};

export default Home;