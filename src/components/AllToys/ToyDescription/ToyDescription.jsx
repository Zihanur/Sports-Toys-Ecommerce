import { useLoaderData } from "react-router-dom";

const ToyDescription = () => {
  const toy = useLoaderData();
  console.log(toy);
  const { seller, toy_name, price, quantity, details, email, img, rating } =
    toy;
  return (
    <div className="my-4 mx-4 lg:mx-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <h1 className="text-5xl font-bold">{toy_name} details</h1>
          <img src={img} className="max-w rounded-lg shadow-2xl" />
          <div className="text-2xl">
            <p className="py-6 ">
              <strong>Toy details:</strong> {details}
            </p>
            <p className="py-6">
              <strong>Seller name: </strong>
              {seller}
            </p>
            <p className="py-6">
              <strong>Seller email:</strong> {email}
            </p>
            <p className="py-6">
              <strong>Available quantity:</strong> {quantity}
            </p>
            <div className="flex gap-6">
              <p className="py-6">
                <strong>Price:</strong> {price}
              </p>
              <p className="py-6">
                <strong>Rating:</strong> {rating}
              </p>
            </div>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDescription;
