import { useEffect, useState } from "react";
import UpcomingEvent from "./UpcomingEvent";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div
      className="max-w-[1280px] mx-auto my-24 px-3"
    >
      <div data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Tech Unleashed: Upcoming Highlights
      </h2>
      <p className="text-center w-full md:w-3/4 mx-auto my-5">
        Stay ahead in the ever-evolving tech landscape. Explore our upcoming
        tech conferences and expos, where innovation meets opportunity. From AI
        to blockchain, cybersecurity to IoT, these events are your gateway to
        the future of technology. Mark your calendar and prepare to be inspired.
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-12">
        {isShowAll
          ? events.map((event) => (
              <UpcomingEvent key={event.id} event={event}></UpcomingEvent>
            ))
          : events
              .slice(0, 6)
              .map((event) => (
                <UpcomingEvent key={event.id} event={event}></UpcomingEvent>
              ))}
      </div>
      {!isShowAll && events.length > 6 ? (
        <div className="flex justify-center">
          <button
            onClick={() => setIsShowAll(!isShowAll)}
            className="btn rounded my-4 bg-gray-200 btn-outline normal-case"
          >
            See All
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={() => setIsShowAll(!isShowAll)}
            className="btn rounded my-4  bg-gray-200 btn-outline normal-case"
          >
            See Less
          </button>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
