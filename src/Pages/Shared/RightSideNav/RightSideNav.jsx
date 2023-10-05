import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="font-semibold text-xl mb-5 text-[#403F3F]">Login With</h2>
        <button className="btn btn-outline border-blue-700 text-blue-700 w-full mb-2">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-xl mb-5 text-[#403F3F]">Find Us On</h2>
        <a className="p-4 flex items-center gap-2 font-medium text-[#706F6F] rounded-t-lg border border-[#E7E7E7]" href="">
          <FaFacebook className="text-xl text-blue-700"></FaFacebook>
          Facebook
        </a>
        <a className="p-4 flex items-center gap-2 font-medium text-[#706F6F] border-x border-[#E7E7E7]" href="">
          <FaTwitter className="text-xl text-blue-700"></FaTwitter>
          Twitter
        </a>
        <a className="p-4 flex items-center gap-2 font-medium text-[#706F6F] rounded-b-lg border border-[#E7E7E7]" href="">
          <FaInstagram className="text-xl text-blue-700"></FaInstagram>
          Instagram
        </a>
      </div>

      <div className="p-4 bg-[#F3F3F3]">
        <h2 className="font-semibold text-xl mb-5 text-[#403F3F]">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
