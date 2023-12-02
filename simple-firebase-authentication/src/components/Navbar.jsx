import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ProviderContext/providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(toast.success("Successfully Logged out"))
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navList = (
    <>
      <li className="lg:mx-2 mb-4 lg:mb-0 text-xl font-bold bg-transparent ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "underline flex decoration-4 decoration-red-700 hover:bg-transparent "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0 text-xl font-bold bg-transparent hover:bg-transparent">
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive
              ? "underline flex decoration-4 decoration-red-700 hover:bg-transparent "
              : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0 text-xl font-bold bg-transparent ">
        <NavLink
          to={"/register"}
          className={({ isActive }) =>
            isActive
              ? "underline flex decoration-4 decoration-red-700 hover:bg-transparent"
              : ""
          }
        >
          Register
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0 text-xl font-bold bg-transparent ">
        <NavLink
          to={"/home2"}
          className={({ isActive }) =>
            isActive
              ? "underline flex decoration-4 decoration-red-700 hover:bg-transparent"
              : ""
          }
        >
          Home2
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0 text-xl font-bold bg-transparent ">
        <NavLink
          to={"/login2"}
          className={({ isActive }) =>
            isActive
              ? "underline flex decoration-4 decoration-red-700 hover:bg-transparent"
              : ""
          }
        >
          Login2
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0 text-xl font-bold bg-transparent ">
        <NavLink
          to={"/register2"}
          className={({ isActive }) =>
            isActive
              ? "underline flex decoration-4 decoration-red-700 hover:bg-transparent"
              : ""
          }
        >
          Register2
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0 text-xl font-bold bg-transparent ">
        <NavLink
          to={"/secInfo"}
          className={({ isActive }) =>
            isActive
              ? "underline flex decoration-4 decoration-red-700 hover:bg-transparent"
              : ""
          }
        >
          Secret Info
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {" "}
              {navList}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            Authentication Practice
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
            <span className="text-xl text-green-800 font-bold ms-3">{user.email}</span>
            <a onClick={handleSignOut} className="btn ms-2">
              Sign Out
            </a>
            </>
          ) : (
            <Link to={"/login2"}>Sign In</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
