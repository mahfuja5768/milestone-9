import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../components/ProviderContext/AuthProvider";
import Footer from "../components/Footer";

const Register = () => {
  const { createUser, googleSign, updateUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photoUrl");
    const password = form.get("password");
    // console.log(name, email, password);

    setRegisterError("");
    formValues.reset();
    if (name.length === 0 || password.length < 0) {
      return;
    } else if (password.length < 6) {
      return setRegisterError(" The password is less than 6 characters");
    }
    else if (!/[A-Z]/.test(password)) {
      return setRegisterError(" The password don't have a capital letter");
    } else if (!/[!#$%&?]/.test(password)) {
      return setRegisterError(" The password don't have a special character");
    }

    createUser(email, password)
      .then(() => {
        updateUser(name, photoUrl)
          .then()
          .catch((err) => setRegisterError(err.message));
        toast.success("Successfully User Created!");
      })
      .catch((err) => {
        setRegisterError(err.message);
      });
  };

  const handleGoogle = () => {
    googleSign()
      .then((res) => {
        const user = res.user;
        console.log(user)
        updateUser(user.photoURL, user.displayName)
          .then()
          .catch((err) => setRegisterError(err.message));
        toast.success("Successfully User Created!");
      })
      .catch((err) => {
        setRegisterError(err.message);
      });
  };

  return (
    <>
      <div className="flex flex-col w-full max-w-[1280px] mx-auto px-3 my-8">
        <div className="text-center lg:text-start text-neutral-content mx-auto lg:my-8">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between my-2">
            <div  data-aos="fade-up"
     data-aos-duration="3000">
              <img
                src={`https://i.ibb.co/7V7mjG7/reigister-illus.png`}
                alt=""
              />
            </div>

            <div
              className="opacity-100 bg-[#cae2fe] py-1 rounded-xl"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="hero ">
                <div className="hero-content">
                  <div className="card  w-full">
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <h3 className="text-center text-3xl text-black font-bold my-1">
                          Register now
                        </h3>
                        <div className="form-control text-black">
                          <label className="label">
                            <span className="label-text text-lg ">Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control text-black">
                          <label className="label">
                            <span className="label-text text-lg">Email</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered "
                            required
                          />
                        </div>
                        <div className="form-control text-black">
                          <label className="label">
                            <span className="label-text text-lg">
                              Photo Url
                            </span>
                          </label>
                          <input
                            type="text"
                            name="photoUrl"
                            placeholder="photo url"
                            className="input input-bordered "
                          />
                        </div>
                        <div className="form-control text-black text-lg ">
                          <label className="label">
                            <span className="label-text text-lg ">
                              Password
                            </span>{" "}
                            <span>
                              {showPass ? (
                                <FaEyeSlash
                                  onClick={() => setShowPass(!showPass)}
                                />
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
                            required
                          />
                          <label className="label text-sm text-start text-black my-2">
                            <span>Already have an account?</span>
                            <Link
                              to={"/login"}
                              className=" label-text-alt link link-hover text-[#3e8ee9] text-sm"
                            >
                              Login now
                            </Link>
                          </label>
                        </div>
                        {registerError && (
                          <h3 className="text-red-600  text-lg pb-2">
                            {registerError}
                          </h3>
                        )}
                        <input
                          className="btn normal-case bg-[#4293e5] text-white w-full hover:text-black"
                          type="submit"
                          value="Register"
                        />
                        <div className="divider text-black py-1">OR</div>
                        <button
                          onClick={handleGoogle}
                          className="btn bg-[#4293e5] normal-case text-white w-full hover:text-black"
                        >
                          <span>With Google</span>
                          <span>
                            <FaGoogle></FaGoogle>
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  );
};

export default Register;
