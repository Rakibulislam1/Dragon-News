import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData()
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 mt-4">
          <h2 className="font-semibold text-xl mb-5 text-[#403F3F]">Dragon News Home</h2>
          {
            news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
          }
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;