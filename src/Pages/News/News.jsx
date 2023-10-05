import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const News = () => {
  const { _id } = useParams();

  const newsDetails = useLoaderData();
  
  const [newsDetailData, setNewsDetailData] = useState({});
  
  const { title, details, image_url } = newsDetailData;
  

  useEffect(() => {
    const newsDetail = newsDetails?.find((newsDetail) => (newsDetail._id === _id));
    setNewsDetailData(newsDetail);
  }, [_id, newsDetails]);

  console.log(newsDetailData);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="col-span-3">
          <h2 className="font-semibold text-xl mb-5 text-[#403F3F] mt-4">
            Dragon News
          </h2>

          <div className="card bg-base-100 shadow-xl mb-5">
            <figure>
              <img src={image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
