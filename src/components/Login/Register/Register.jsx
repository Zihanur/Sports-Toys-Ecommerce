import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, addUserNameImg } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    //user create function
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        addUserNameImg(name, photo)
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log(error);
          });
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <>
      <div className=" min-h-screen bg-base-200 w-full">
        <div className="hero-content ">
          <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleCreateUser}>
              <h1 className="text-center text-2xl font-bold">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
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
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                You have an account.
                <Link to={"/login"} className="text-blue-600">
                  Login
                </Link>
              </p>
              <p className="text-orange-600 fs-6">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
