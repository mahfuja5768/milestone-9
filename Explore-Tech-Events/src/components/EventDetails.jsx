import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { FaTicketAlt, FaUserAlt , FaMoneyBillAlt, FaCalendarDay, FaLocationArrow} from "react-icons/fa";

const EventDetails = () => {
  const allEvents = useLoaderData();
  const { id } = useParams();

  const selectedEvent = allEvents.find((event) => event.id == id);
  const { author_name, date, event_name,price, img, location, short_description } =
    selectedEvent || {};

  const saveEventId = (id) => {
    const storedEventIds = JSON.parse(localStorage.getItem("eventIds")) || [];
    const isExists = storedEventIds.find((donationId) => donationId === id);
    if (!isExists) {
      storedEventIds.push(id);
      localStorage.setItem("eventIds", JSON.stringify(storedEventIds));
      toast.success("Congratulation you brought the ticket!");
    } else {
      return toast.error("You had already brought the ticket of this event!");
    }
  };

  const handleTicket = () => {
    saveEventId(id);
  };

  return (
    <>
      <div className=" max-w-[1280px] mx-auto  px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-12">
          <div
            className="md:row-span-2 bg-gradient-to-b from-[#dad9d991] to-[#ffffff] rounded-xl"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img src={img} className="w-full rounded-xl" alt="" />
          </div>
          <div
            className="md:row-span-2 bg-gradient-to-t from-[#dad9d991] to-[#f7f5f5] flex items-center justify-center rounded-lg px-2 py-12 flex-col"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <p className="text-xl md:text-2xl font-bold ">Event name:</p>
            <p className="text-2xl md:text-3xl font-bold ">{event_name}</p>
            <p className="font-bold flex items-center">
              <span className="text-xl me-3">
                <FaUserAlt></FaUserAlt>
              </span>
              <span className="text-lg md:text-xl my-1">
                {" "}
                Author: {author_name}
              </span>
            </p>
          </div>
          <div
            className="md:row-span-2 md:col-span-2 bg-gradient-to-b from-[#dad9d991] to-[#f7f5f5] flex items-center justify-center rounded-lg px-3 py-12"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div>
              <p>
                <span className="text-lg font-bold">Description</span>:{" "}
                {short_description}
              </p>
              <p className="flex items-center my-2 text-lg font-bold">
              <span>
                <FaLocationArrow className=" me-2"></FaLocationArrow>
              </span>
              <span> Date: {location}</span>
            </p>
              <p className="flex items-center my-2 text-lg font-bold">
              <span>
                <FaCalendarDay className=" me-2"></FaCalendarDay>
              </span>
              <span> Date: {date}</span>
            </p>
            <p className="flex items-center mb-4 text-lg font-bold">
                <FaMoneyBillAlt className="me-2"></FaMoneyBillAlt> {/* price icon */}
              <span> Price: {price}</span>
            </p>
              <button
                onClick={handleTicket}
                className="btn bg-gray-200 btn-outline  w-full normal-case p-4"
              >
                Buy Ticket
                <span>
                  <FaTicketAlt></FaTicketAlt>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default EventDetails;
