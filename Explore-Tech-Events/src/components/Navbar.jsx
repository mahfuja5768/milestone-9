import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./ProviderContext/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Successfully log out"))
      .catch((err) => console.log(err));
  };

  const navList = (
    <>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-black hover:text-black hover:underline decoration-black decoration-2 underline-offset-8 hover:bg-transparent"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-black hover:text-black hover:underline decoration-black decoration-2 underline-offset-8 hover:bg-transparent"
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-black hover:text-black hover:underline decoration-black decoration-2 underline-offset-8 hover:bg-transparent"
          }
          to={"/moreEvents"}
        >
          More Events
        </NavLink>
      </li>

      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-black hover:text-black hover:underline decoration-black decoration-2 underline-offset-8 hover:bg-transparent"
          }
          to="/selectedEvent"
        >
          Selected Event
        </NavLink>
      </li>

      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-black hover:text-black hover:underline decoration-black decoration-2 underline-offset-8 hover:bg-transparent"
          }
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black hover:text-black underline decoration-black decoration-2 underline-offset-8 font-bold hover:bg-transparent"
              : "text-black hover:text-black hover:underline decoration-black decoration-2 underline-offset-8 hover:bg-transparent"
          }
          to="/register"
        >
          Register
        </NavLink>
      </li>

      <li className="md:hidden w-1/2">
        {user && (
          <div className="flex flex-col items-start justify-start ">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                className="rounded-full w-[40px] h-[40px]"
                alt="user photo"
              />
            ) : (
              <img
                src={"https://i.ibb.co/VHT7xQ6/user1.png"}
                className="rounded-full w-[40px] h-[40px]"
                alt="user photo"
              />
            )}
            <h3 className="text-black text-sm ms-2">{user?.displayName}</h3>
          </div>
        )}
      </li>
      {user && (
        <li className="md:hidden w-1/2">
          <Link
            to="/login"
            onClick={handleLogout}
            className="btn bg-black text-white btn-sm rounded-lg mb-5"
          >
            Log out
          </Link>
        </li>
      )}
      {!user && (
        <li className="md:hidden w-1/2">
          <Link
            to="/login"
            className="btn btn-sm bg-black text-white normal-case  rounded-lg mb-5"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className=" bg-base-100 shadow-xl py-3">
      <div className="navbar max-w-[1280px] mx-auto px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ececec] rounded-sm w-52"
            >
              {navList}
            </ul>
          </div>
          <div data-aos="fade-right" data-aos-duration="3000">
            <Link
              to="/"
              className="btn btn-ghost normal-case lg:text-2xl font-bold hidden lg:flex text-black"
            >
              Explore-Tech-Events
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end flex lg:hidden me-4">
          <Link
            to="/"
            className="btn btn-ghost normal-case  font-bold text-xl md:text-2xl  mt-3 block lg:hidden"
          >
            Explore-Tech-Events
          </Link>
        </div>
        <div className="navbar-end hidden md:flex me-5">
          {user && (
            <Link
              to="/login"
              onClick={handleLogout}
              className="btn btn-sm rounded-sm normal-case text-xl"
            >
              Log out
            </Link>
          )}
          {!user && (
            <Link
              to="/login"
              className="btn btn-sm lg:btn text-xl lg:bg-black bg-black text-white  lg:text-white rounded-lg normal-case"
            >
              Login
            </Link>
          )}

          {user && (
            <div className="flex flex-col items-center justify-center mx-5">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  className="rounded-full w-[40px] h-[40px]"
                  alt="user photo"
                />
              ) : (
                <img
                  src={"https://i.ibb.co/VHT7xQ6/user1.png"}
                  className="rounded-full w-[40px] h-[40px]"
                  alt="user photo"
                />
              )}
              <h3 className="text-black text-sm">{user?.displayName}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
