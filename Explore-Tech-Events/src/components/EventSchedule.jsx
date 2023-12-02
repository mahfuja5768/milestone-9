const EventSchedule = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-3 my-24" data-aos="fade-up"
    data-aos-duration="3000">
      <h2 className="text-3xl md:text-4xl text-center font-bold">EVENT SCHEDULE</h2>
      <p className="my-4 lg:w-1/2 text-center mx-auto">
        Here's the schedule of exciting events happening at TechCon 2023.
        Explore a wide range of topics and engage with industry experts.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="table">
          <thead>
            <tr className="bg-base-200">
              <th></th>
              <th>Date</th>
              <th>Time</th>
              <th>Speakers</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>1</td>
              <td>Day 01</td>
              <td>09.00 am - 05.00 am</td>
              <td>Jane Smitha</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Day 02</td>
              <td>11.00 am - 07.00 am</td>
              <td>David Johnson</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Day 03</td>
              <td>10.00 am - 04.00 am</td>
              <td>Sarah Adams</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventSchedule;
