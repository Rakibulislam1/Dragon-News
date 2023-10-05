/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()
  console.log("=>>>>>>>", location);


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      console.log(result.user);

      // navigate after login
      navigate(location?.state ? location.state : '/')

    })
    .catch(error => {
      console.error(error);
    })
  };

  return (
      <div>
        <h2 className="text-center font-semibold text-2xl my-10">Log In Now</h2>
        <form onSubmit={handleLogin} className="px-5 lg:w-1/3 mx-auto">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <small className="text-center block py-5">Don't have an account ? Please <Link className="text-blue-700" to='/register'>Register</Link></small>
      </div>
  );
};

export default Login;
