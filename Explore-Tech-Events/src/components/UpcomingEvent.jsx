import PropTypes from "prop-types";
import { FaCalendarDay, FaTicketAlt , FaMoneyBillAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UpcomingEvent = ({ event }) => {
  const { date, event_name, id,price, img, short_description } = event;

  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/eventDetails/${id}`);
  };

  return (
    <div>
      <div
        className="card bg-base-100 shadow-xl "
        data-aos-duration="3000"
        data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
      >
        <figure>
          <img className="w-full h-[200px]" src={img} alt="eventImage" />
        </figure>

        <div className="card-body">
          <h2 className="text-xl  font-bold">{event_name}</h2>
          <p className="card-text">
            {short_description.length < 150 ? (
              { short_description }
            ) : (
              <span>{short_description.slice(0, 100)}...</span>
            )}
          </p>
          <div className="py-1">
            <p className="flex items-center">
              <span>
                <FaCalendarDay className="text-sm me-2"></FaCalendarDay>
              </span>
              <span className="text-lg"> Date: {date}</span>
            </p>
            <p className="flex items-center">
                <FaMoneyBillAlt className="text-sm me-2"></FaMoneyBillAlt> {/* price icon */}
              <span className="text-lg"> Price: {price}</span>
            </p>
          </div>
          <div className="card-actions py-2">
            <button
              onClick={() => handleDetail(id)}
              className="btn bg-gray-200 btn-outline  w-full normal-case"
            >
              Details & Get Ticket
              <span>
                <FaTicketAlt></FaTicketAlt>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

UpcomingEvent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default UpcomingEvent;
