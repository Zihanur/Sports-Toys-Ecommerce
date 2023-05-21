import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
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
    console.log(
      toy_name,
      img,
      sub_category,
      seller,
      email,
      price,
      quantity,
      rating,
      details
    );
    const newToy = {
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
    fetch(
      "https://b7a11-toy-marketplace-server-side-zihanur.vercel.app/mytoys",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Added Sports Toy");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className=" min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleAddToy}>
              <h1 className="text-center text-2xl font-bold">Add Sports Toy</h1>
              <div className="form-control">
                <input
                  type="text"
                  name="toy"
                  placeholder="Toy Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="photo"
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

export default AddAToy;
