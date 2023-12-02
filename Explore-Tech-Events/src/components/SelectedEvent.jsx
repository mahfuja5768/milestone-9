import { FaCalendarDay, FaLocationArrow, FaUserAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const SelectedEvent = ({ event }) => {
  const { author_name, date, event_name, img, price, location } =
    event || {};

  return (
    <div>
      <div
        className="card bg-base-100 shadow-xl "
        data-aos-duration="3000"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <figure>
          <img className="w-full h-[250px]" src={img} alt="eventImage" />
        </figure>

        <div className="card-body">
          <h2 className="text-xl md:text-2xl  font-bold">{event_name}</h2>
          <div className="py-1">
            <p className=" flex items-center">
              <span className="text-sm me-3">
                <FaUserAlt></FaUserAlt>
              </span>
              <span className=" my-1">Author: {author_name}</span>
            </p>
            <p className="flex items-center my-2">
              <span>
                <FaCalendarDay className=" me-2"></FaCalendarDay>
              </span>
              <span> Date: {date}</span>
            </p>
            <p className="flex items-center">
                <FaCalendarDay className="text-sm me-2"></FaCalendarDay> {/* price icon */}
              <span className="text-sm"> Price: {price}</span>
            </p>
            <p className="flex items-center">
              <span>
                <FaLocationArrow className=" me-2"></FaLocationArrow>
              </span>
              <span> Location: {location}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SelectedEvent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default SelectedEvent;
