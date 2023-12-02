import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center space-y-4 my-8">
      <img src={logo} alt="" />
      <p className="text-lg  ">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>

      <div className="flex items-center bg-gray-700 p-4 rounded-sm">
        <button className="btn btn-secondary rounded-sm me-4">Latest</button>
        <Marquee speed={100} pauseOnHover>
          I can be a React component, multiple React components, or just some
          text. Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
