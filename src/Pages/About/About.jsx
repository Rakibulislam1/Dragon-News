import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-60">
      <div className="flex justify-center items-center">
        <h2>Coming Soon</h2>
      </div>
      <button className="btn-sm mt-5 btn-secondary block mx-auto">
        <Link to="/">Go back to home</Link>
      </button>
    </div>
  );
};

export default About;
