import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

  const [categories, setCategories] = useState([])

  useEffect(() =>{
    fetch('/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  return (
    <div className="space-y-6 p-4">
        <h2 className="font-semibold text-xl mb-5 text-[#403F3F]">All Category</h2>
        {
          categories.map(category => <Link to={`/category/${category.id}`} className="block font-semibold ml-4 text-xl" key={category.id}>{category.name}</Link>)
        }
    </div>
  );
};

export default LeftSideNav;