import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const { logIn, googleLogIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  //login with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //login function
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //login with Google
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        setError("");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1 ">
          <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <h1 className="text-center text-2xl font-bold">Login</h1>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Are you new?
                <Link to={"/register"} className="text-blue-600">
                  Register
                </Link>
              </p>
              <div className="text-center">
                <button onClick={handleGoogleLogIn}>
                  <FaGoogle style={{ height: 25, width: 25 }} />
                </button>
              </div>
              <p className="text-danger fs-6">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
