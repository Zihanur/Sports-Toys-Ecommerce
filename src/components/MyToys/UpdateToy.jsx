import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateToy = () => {
  const updateToy = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, toy_name, img } = updateToy;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toy_name = form.toy.value;
    const img = form.photo.value;
    const sub_category = form.category.value;
    const seller = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const details = form.description.value;

    const updateToy = {
      toy_name,
      img,
      sub_category,
      seller,
      email,
      price,
      quantity,
      rating,
      details,
    };
    fetch(`http://localhost:5000/mytoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Updated");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className=" min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleUpdateToy}>
              <h1 className="text-center text-2xl font-bold">Update Toy</h1>
              <div className="form-control">
                <input
                  type="text"
                  name="toy"
                  defaultValue={toy_name}
                  placeholder="Toy Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="photo"
                  defaultValue={img}
                  placeholder="Toy Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <select name="category" className="input input-bordered">
                  <option value="Cricket">Cricket</option>
                  <option value="Football">Football</option>
                  <option value="Baseball">Baseball</option>
                </select>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Seller Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Seller Email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  name="price"
                  placeholder="Toy Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  name="rating"
                  placeholder="Toy Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Description</span>
                </label>
                <input
                  type="textarea"
                  name="description"
                  placeholder="Toy Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
