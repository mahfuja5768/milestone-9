import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
      <div
          className="carousel w-full h-[90vh] mb-12 text-center lg:text-start "
        >
          <div id="slide1" className="carousel-item relative w-full">
            <img src={'https://i.ibb.co/wzMDxsC/banner1.jpg'} className="w-full" alt="banner-png" />
            <div
              className="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-b from-[#121212] h-full"
            >
              <a
                href="#slide2"
                className="btn btn-circle bg-[#272626] border-none text-white ms-5"
                >❮</a
              >
              <div className="hero-content text-white">
              <div className="grid grid-cols-1 lg:grid-cols-4">
              <div
                className=" lg:col-span-3"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h1 className="mb-4 text-3xl md:text-5xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto">
                  Discover the Latest Trends, Insights, and Innovations.
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold">
                  The Ultimate Tech Experience Awaits You.
                </h2>
                <p className="my-3 md:w-3/4 lg:w-full mx-auto text-[#bebebe]">
                  At <strong>Explore-Tech-Events</strong>, conferences and expos
                  are more than just events; they are immersive experiences that
                  empower you to connect, learn, and shape the future of
                  technology.
                </p>
                <Link to="/moreEvents">
                  {" "}
                  <button className="btn mt-1 mb-5 normal-case bg-gray-200 btn-outline">
                    <span>Upcoming Events</span>
                    <span className="mt-2 w-6 h-6 animate-moveRight">
                      <FaArrowCircleRight></FaArrowCircleRight>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-2/5 hidden lg:flex" data-aos="fade-left"
                  data-aos-duration="3000">
              <img
                className="flex -rotate-180 "
                src={`https://i.ibb.co/9ckZs9b/banner-side.png`}
                alt=""
              />
            </div>
              </div>
              <a
                href="#slide2"
                className="btn btn-circle bg-[#272626] border-none text-white me-5"
                >❯</a
              >
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={'https://i.ibb.co/wzMDxsC/banner1.jpg'} className="w-full" alt="banner-png" />
            <div
              className="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-b from-[#121212] h-full"
            >
              <a
                href="#slide1"
                className="btn btn-circle bg-[#272626] border-none text-white ms-5"
                >❮</a
              >
              <div className="hero-content text-white">
              <div className="grid grid-cols-1 lg:grid-cols-4">
              <div
                className=" lg:col-span-3"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h1 className="mb-4 text-3xl md:text-5xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto">
                Tech's Best and Brightest Gather at Explore-Tech-Events.
                </h1>
                <h2 className="text-xl  md:text-2xl font-semibold">
                Charting the Future of Technology, Together.
                </h2>
                <p className="my-3 md:w-3/4 lg:w-full mx-auto text-[#bebebe]">
                  At <strong>Explore-Tech-Events</strong>, conferences and expos
                  are more than just events; they are immersive experiences that
                  empower you to connect, learn, and shape the future of
                  technology.
                </p>
                <Link to="/moreEvents">
                  {" "}
                  <button className="btn mt-1 mb-5 normal-case bg-gray-200 btn-outline">
                    <span>Upcoming Events</span>
                    <span className="mt-2 w-6 h-6 animate-moveRight">
                      <FaArrowCircleRight></FaArrowCircleRight>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="w-1/2 hidden lg:flex"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img
                src={`https://i.ibb.co/DrvShMP/banner-light2-removebg-preview.png`}
                alt=""
              />
            </div>
              </div>
              <a
                href="#slide1"
                className="btn btn-circle bg-[#272626] border-none text-white me-5"
                >❯</a
              >
            </div>
          </div>
        </div>
    </div>
  );
};

export default Banner;
