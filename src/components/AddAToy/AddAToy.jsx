const AddAToy = () => {
  //Toys Details route ( /toy/:id ) containing the information (  price, rating, available quantity, and detail description)
  return (
    <div>
      <div className=" min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
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
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Seller Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Seller Email"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
