import { useContext } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const SubCategories = ({ category }) => {
  const { user } = useContext(AuthContext);
  const { _id, sub_name, image, price, rating } = category;

  const handleToyDetails = (_id) => {
    console.log(_id, "Btn clicked");
    console.log(user);
  };

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
            <Link to={"/toydetails"}>
              <button
                onClick={() => handleToyDetails(_id)}
                className="btn btn-primary"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategories;
