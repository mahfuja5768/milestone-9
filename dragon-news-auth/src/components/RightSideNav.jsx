import {
  FaFacebookSquare,
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";
import bottomBg from "../assets/bg.png";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-5">Login With</h2>
        <button className="btn flex btn-outline w-full mb-5">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn flex btn-outline w-full">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-bold my-5">Find Us On</h2>
        <button className="btn flex btn-outline w-full rounded-t-lg rounded-b-none">
          <FaFacebookSquare></FaFacebookSquare> Facebook
        </button>
        <button className="btn flex btn-outline w-full rounded-none">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn flex btn-outline w-full rounded-b-lg rounded-t-none">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
      <div className="my-5 bg-gray-700 flex flex-col justify-center gap-5 p-4">
        <h2 className="text-2xl font-bold my-5">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div className="text-center h-[509px] grid place-content-center space-y-6" style={{backgroundImage:`url(${bottomBg})`, backgroundPosition:'center'}}>
        <h2 className="text-4xl font-semibold">Create an Amazing Newspaper</h2>
        <p className="w-3/4 mx-auto">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-secondary w-[150px] mx-auto my-6 rounded-sm">Learn More</button>
      </div>
    </div>
  );
};

export default RightSideNav;
