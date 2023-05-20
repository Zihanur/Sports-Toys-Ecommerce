import { useLoaderData } from "react-router-dom";
import MyToy from "./MyToy";

const MyToys = () => {
  const myToys = useLoaderData()
  console.log(myToys)
  return (
    <div>
      <div>
      <h2 className="text-center text-3xl font-bold my-4">All Toys</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Saller Email</th>
              <th>Rating</th>
              <th>Details</th>
              <th>Photo</th>
              <th>Status</th>
            </tr>
          </thead>
          {
            myToys.map(toy=><MyToy key={toy._id} toy={toy}></MyToy>)
          }
        </table>
      </div>
    </div>
    </div>
  );
};

export default MyToys;