import { FaCalendarDay, FaLocationArrow } from "react-icons/fa";
import Countdown from "react-countdown";
import { useEffect, useRef, useState } from "react";

const ConferenceInfo = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Oct 25, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div
      className="max-w-[1280px] mx-auto mb-24 mt-12  px-3"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        ABOUT THE CONFERENCE
      </h2>
      <p className="text-lg my-5 text-center w-full md:w-3/4 lg:w-2/3 mx-auto">
        Join us for three days of tech innovation, networking, and knowledge
        sharing. Get ready to dive into the future of technology!
      </p>
      <div className=" flex flex-col justify-center md:flex-row items-center gap-6 my-6">
        <div className="border-2 p-3 rounded-3xl border-gray-500">
          <p className="text-lg md:text-xl font-semibold py-1">
            Event Name: Cybersecurity Summit 2023
          </p>
          <p className="flex items-center  gap-2 text-lg md:text-xl py-1 font-semibold">
            <span>
              <FaCalendarDay></FaCalendarDay>
            </span>
            <span>Date: October 25-27, 2023</span>
          </p>
          <p className="flex items-center  gap-2 te text-lg md:text-xl py-1 font-semibold">
            <span>
              <FaLocationArrow></FaLocationArrow>
            </span>
            <span>Location: Hotel Millennium Gold, Khulna</span>
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 border-2 p-3 rounded-3xl border-gray-500">
          <section className="text-4xl p-4 bg-gray-800 text-white rounded-xl flex flex-col items-center">
            <p>{timerDays}</p>
            <p>d</p>
          </section>
          <section className="text-4xl p-4 bg-gray-800 text-white rounded-xl flex flex-col items-center">
            <p>{timerHours}</p>
            <p>h</p>
          </section>
          <section className="text-4xl p-4 bg-gray-800 text-white rounded-xl flex flex-col items-center">
            <p>{timerMinutes}</p>
            <p>m</p>
          </section>
          <section className="text-4xl p-4 bg-gray-800 text-white rounded-xl flex flex-col items-center">
            <p>{timerSeconds}</p>
            <p>s</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConferenceInfo;
