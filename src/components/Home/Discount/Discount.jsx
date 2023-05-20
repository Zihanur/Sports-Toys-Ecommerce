const Discount = () => {
  return (
    <div className="mx-8 ">
      <h1 className="text-center text-3xl font-bold mt-10 mb-6">
        Supper Eid Discount
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center w-full items-center space-y-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              style={{height:200}}
              src="https://i.ibb.co/7NKL9hM/c11.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-orange-600">50% off</h2>
            <p>Cricket Toys</p>
            <div className="card-actions justify-end">
              <button className="btn btn-error">Get</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              style={{height:200}}
              src="https://i.ibb.co/VS2TDBB/f1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-orange-600">30% off</h2>
            <p>Football Toys</p>
            <div className="card-actions justify-end">
              <button className="btn btn-error">Get</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              style={{height:200}}
              src="https://i.ibb.co/YLyYg9p/Sports1.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-orange-600">40% off</h2>
            <p>Sports Car</p>
            <div className="card-actions justify-end">
              <button className="btn btn-error">Get</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
