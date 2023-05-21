import { useLoaderData } from "react-router-dom";
import Toy from "./Toy/Toy";
import { useState } from "react";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  const [showall, setShowall] = useState(false);

  const handleShowMore = () => {
    setShowall(!showall);
  };

  //search by toy name function
  const searchToy = (event) => {
    event.preventDefault();
    const toy_name = event.target.name.value;
    console.log(toy_name);
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-4">All Toys</h2>

      {/* search bar */}
      <form className="relative w-2/3 mx-auto my-4" onSubmit={searchToy}>
        <input
          type="text"
          name="name"
          placeholder="toy name"
          className="input input-bordered w-full pr-16"
        />
        <button className="btn absolute top-0 right-0 rounded-l-none">
          Search Toy
        </button>
      </form>

      {/* all toys table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          {showall ? (
            <>
              {allToys.map((toy) => (
                <Toy key={toy._id} toy={toy}></Toy>
              ))}
            </>
          ) : (
            <>
              {allToys.slice(0, 20).map((toy) => (
                <Toy key={toy._id} toy={toy}></Toy>
              ))}
            </>
          )}
        </table>
        <div className="my-4 text-center">
          <button onClick={handleShowMore} className="btn btn-primary">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
