const HappyClient = () => {
  return (
    <div className="mb-6 mx-4 md:mx-6 lg:mx-10 rounded-lg">
      <h1 className="text-center text-3xl font-bold mt-10 mb-6">
        Happy Client
      </h1>
      <div className="lg:flex">
        <div className="hero h-full bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              style={{ height: 200 }}
              src="https://i.ibb.co/P4Fkbj4/u1.webp"
              className="max-w-sm rounded-xl shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">David Dawud</h1>
              <p className="py-2">Buy: 9</p>
              <p className="py-2">Rating: 5</p>
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="hero h-full bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              style={{ height: 200 }}
              src="https://i.ibb.co/dB35sMY/u4.jpg"
              className="max-w-sm rounded-xl shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Samid Ahamed</h1>
              <p className="py-2">Buy: 21</p>
              <p className="py-2">Rating: 4.5</p>
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
