import Footer from "../components/Footer";
import UpcomingEvents from "../components/UpcomingEvents";

const MoreEvents = () => {
  return (
    <>
      <div className=" max-w-[1280px] mx-auto  px-4">
        <UpcomingEvents></UpcomingEvents>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MoreEvents;
