import ConferenceInfo from "../components/ConferenceInfo";
import EventSchedule from "../components/EventSchedule";
import Footer from "../components/Footer";
import Speakers from "../components/Speakers";

const About = () => {
  return (
    <>
      <div className=" max-w-[1280px] mx-auto  px-4">
        <ConferenceInfo></ConferenceInfo>
        <EventSchedule></EventSchedule>
        <Speakers></Speakers>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
