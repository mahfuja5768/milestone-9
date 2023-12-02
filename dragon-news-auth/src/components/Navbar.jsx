import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "./ProviderContext/providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Successfully log out"))
      .catch((err) => console.log(err));
  };


  const navList = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="mx-5">
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );

 
  return (
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
            {navList}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
          <h3>{user.displayName}</h3>
            <img
              src={user.photoURL}
              alt=""
              className="w-12 h-12 rounded-full"
            />{" "}
            <Link onClick={handleLogout} className="btn btn-accent">
              Log out
            </Link>
          </>
        ) : (
          <>
            <img src={userIcon} alt="" className="w-12 h-12 rounded-full" />
            <Link to="/login" className="btn btn-accent">
              Login
            </Link>
          </>
        )}
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Navbar;
