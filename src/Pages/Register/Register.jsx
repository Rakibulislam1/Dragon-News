import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

  const { createUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    // create user
    createUser(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => console.error(error))

  };


  return (
    <div>
      <h2 className="text-center font-semibold text-2xl my-10">Register Now</h2>
      <form onSubmit={handleRegister} className="px-5 lg:w-1/3 mx-auto">
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
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <small className="text-center block py-5">
        Already have an account ? Please{" "}
        <Link className="text-blue-700" to="/login">
          Login
        </Link>
      </small>
    </div>
  );
};

export default Register;
