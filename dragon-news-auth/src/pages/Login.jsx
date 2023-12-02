import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../components/ProviderContext/providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const emailRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setLoginError("");
    formValues.reset();

    signInUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully Logged in!");
      })
      .catch((err) => {
        setLoginError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="my-12">
      <Navbar></Navbar>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto my-12">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent bg-green-700">Login</button>
        </div>
        {loginError && (
          <p className="my-3 text-lg text-center  text-red-700">{loginError}</p>
        )}
        <p className="my-3 text-lg text-center">
          New join in Dragon news,
          <Link to="/register" className="ms-3 text-green-700">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
