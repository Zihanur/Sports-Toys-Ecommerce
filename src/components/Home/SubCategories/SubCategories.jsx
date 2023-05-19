import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const SubCategories = ({ category }) => {
  console.log(category);
  const { sub_name, image, price, rating } = category;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="">
          <img className="object-contain h-48 w-96" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{sub_name}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <Link to={'/toydetails'}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategories;
