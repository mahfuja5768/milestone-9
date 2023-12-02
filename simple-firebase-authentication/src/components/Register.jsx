import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";
import app from "./firebase.init";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const auth = getAuth(app);

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;
    const terms = form.terms.checked;
    console.log(name, terms);
    setRegisterError("");

    if (!terms) {
      setRegisterError("Accept our Terms and Conditions!");
      return toast.error("Accept our Terms and Conditions!");
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        const user = res.user;
        toast.success("Successfully User Created!");
        updateProfile(user, { displayName: name })
          .then(console.log("profile updated"))
          .catch((err) => {
            setRegisterError(err.message);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        setRegisterError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="my-12">
      <h3 className="text-center text-4xl text-green-700 font-bold my-2">
        Register now
      </h3>
      <div className="hero ">
        <div className="hero-content">
          <div className="card  w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>{" "}
                    <span>
                      {showPass ? (
                        <FaEyeSlash onClick={() => setShowPass(!showPass)} />
                      ) : (
                        <FaEye onClick={() => setShowPass(!showPass)} />
                      )}
                    </span>
                  </label>
                  <input
                    type={showPass ? "password" : "text"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <div className="mt-4">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      className="me-2"
                    />
                    <label htmlFor="terms">
                      Accept our <Link>Terms and Conditions</Link>
                    </label>
                  </div>
                  <label className="label">
                    <span>Already have an account?</span>
                    <Link
                      to={"/login"}
                      className=" label-text-alt link link-hover ms-2 text-green-600 text-xl"
                    >
                      Login now
                    </Link>
                  </label>
                </div>
                {registerError && (
                  <h3 className="text-red-600 my-4">{registerError}</h3>
                )}
                <input
                  className="btn bg-green-700 text-white w-full"
                  type="submit"
                  value="Register"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
