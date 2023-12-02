import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SelectedEvent from "./SelectedEvent";
import Footer from "./Footer";

const SelectedEvents = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  const allEvents = useLoaderData();
  // console.log(allEvents);
  useEffect(() => {
    const storedEventIds = JSON.parse(localStorage.getItem("eventIds")) || [];
    if (allEvents.length > 0) {
      const selectedEventIds = [];
      for (const id of storedEventIds) {
        const selectedEvent = allEvents.find(
          (event) => event.id === parseInt(id)
        );
        if (selectedEvent) {
          selectedEventIds.push(selectedEvent);
        }
      }
      setSelectedEvents(selectedEventIds);
    }
  }, [allEvents]);

  return (
    <>
      <div className=" max-w-[1280px] mx-auto">
        {!selectedEvents.length && (
          <div
            className="my-12 flex justify-center items-center flex-col py-5"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img
              src={"https://i.ibb.co/933DZKL/empty.png"}
              className="w-1/4 mb-4"
              alt=""
            />
            <h2 className="text-2xl w-1/2 mx-auto text-center md:text-4xl text-gray-900 font-semibold">
              You still have not brought any ticket!
            </h2>
          </div>
        )}

        <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {isShowAll
            ? selectedEvents.map((event) => (
                <SelectedEvent key={event.id} event={event}></SelectedEvent>
              ))
            : selectedEvents
                .slice(0, 4)
                .map((event) => (
                  <SelectedEvent key={event.id} event={event}></SelectedEvent>
                ))}
        </div>
        {!isShowAll && selectedEvents.length > 4 ? (
          <div className="flex justify-center">
            <button
              onClick={() => setIsShowAll(!isShowAll)}
              className="btn rounded my-4  bg-gray-200 btn-outline normal-case"
            >
              See All
            </button>
          </div>
        ) : (
          <div className="hidden">
            <button
              onClick={() => setIsShowAll(!isShowAll)}
              className="btn rounded my-4  bg-gray-200 btn-outline normal-case"
            >
              See Less
            </button>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default SelectedEvents;
