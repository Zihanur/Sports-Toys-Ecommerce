const ToyDetails = () => {
  return (
    <div className="my-4 mx-4 lg:mx-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <h1 className="text-5xl font-bold">Toy Bat details</h1>
          <img
            src="https://i.ibb.co/SwzdfxZ/tb.png"
            className="max-w rounded-lg shadow-2xl"
          />
          <div className="text-2xl">
            <p className="py-6 ">
              <strong>Toy details:</strong>Offers a wide range of dolls for
              sale. Contact for details, pricing, and availability. Shipping
              options available. Provides various dolls for sale. Contact for
              details on available dolls and purchasing information.
            </p>
            <p className="py-6">
              <strong>Available quantity:</strong> 6 pcs
            </p>
            <div className="flex gap-6">
              <p className="py-6">
                <strong>Price:</strong> 12
              </p>
              <p className="py-6">
                <strong>Rating:</strong> 4.5
              </p>
            </div>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
