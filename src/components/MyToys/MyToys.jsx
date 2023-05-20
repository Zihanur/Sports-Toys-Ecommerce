import { useLoaderData } from "react-router-dom";
import MyToy from "./MyToy";
import { useState } from "react";

const MyToys = () => {
  const toys = useLoaderData();
  const [myToys, setMyToys] = useState(toys);
  console.log(myToys);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/mytoys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remaining = myToys.filter((f) => f._id !== id);
          setMyToys(remaining);
        }
      });
  };

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
            {myToys.map((toy) => (
              <MyToy
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToy>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
