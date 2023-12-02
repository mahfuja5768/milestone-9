import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../components/ProviderContext/providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photo-url");
    const password = form.get("password");
    console.log(name, email, password);
    setRegisterError("");
    formValues.reset();

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateUser(name, photoUrl)
          .then(() => console.log("Photo updated"))
          .catch((err) => setRegisterError(err.message));
        toast.success("Successfully User Created!");
      })
      .catch((err) => {
        setRegisterError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="my-12">
      <Navbar></Navbar>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto my-12">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
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
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input
            type="text"
            name="photo-url"
            placeholder="Photo url"
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent bg-green-700">Register</button>
        </div>
        {registerError && (
          <p className="my-3 text-lg text-center  text-red-700">
            {registerError}
          </p>
        )}
        <p className="my-3 text-lg text-center">
          {" "}
          Already have an account ?{" "}
          <Link to="/login" className="ms-3 text-green-700">
            Login
          </Link>
        </p>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
