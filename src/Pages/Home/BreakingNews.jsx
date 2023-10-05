import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] flex items-center py-6 px-4">
        <h2 className="px-6 py-3 text-xl font-medium bg-[#D72050] text-white">Latest</h2>
        <Marquee pauseOnHover={true}>
        <Link to='/' className="text-lg font-semibold text-[#403F3F] mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="text-lg font-semibold text-[#403F3F] mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="text-lg font-semibold text-[#403F3F] mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        </Marquee>
    </div>
  );
};

export default BreakingNews;