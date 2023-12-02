import {
  GoogleAuthProvider,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase.init";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // const handleGoogleSignIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((res) => {
  //       const loggedInUser = res.loggedInUser;
  //       setUser(loggedInUser);
  //     })
  //     .catch((err) => console.log("error", err.message));
  // };
  const [user, setUser] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(true);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
    setLoginError("");

    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        const userInfo = res.user;
        console.log(userInfo.email);
        setUser(userInfo);
        toast.success("Successfully Logged in")
      })
      .catch((err) => {
        setLoginError(err.message);
        toast.error(err.message);
      });
  };
  const handlePassReset = ()=> {
    const email = emailRef.current.value;
    if(!email){
      return toast.error('Give a valid email ')
    }
    sendPasswordResetEmail(auth, email)
      .then(toast.success("Password reset email sent!"))
      .catch((err) => setLoginError(err.message));
  };

  return (
    <div className="my-12 flex gap-5">
      <div>
        <h3 className="text-center text-4xl text-green-700 font-bold my-2">
          Login now
        </h3>
        <div className="hero ">
          <div className="hero-content">
            <div className="card  w-full shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      ref={emailRef}
                      placeholder="email"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
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
                      className="input input-bordered w-full"
                    />
                    <label className="label">
                      <Link
                        onClick={handlePassReset}
                        className="label-text-alt link link-hover"
                      >
                        Forgot password?
                      </Link>
                    </label>
                    <label className="label">
                      <span>New to this?</span>
                      <Link
                        to={"/register"}
                        className=" label-text-alt link link-hover ms-2 text-green-600 text-xl"
                      >
                        Register now
                      </Link>
                    </label>
                  </div>
                  {loginError && (
                    <h3 className="text-red-600 my-4">{loginError}</h3>
                  )}
                  <input
                    className="btn bg-green-700 text-white w-full"
                    type="submit"
                    value="Login"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl">Email: {user.email}</h2>
        <h2 className="text-4xl">Name: {user.displayName}</h2>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
