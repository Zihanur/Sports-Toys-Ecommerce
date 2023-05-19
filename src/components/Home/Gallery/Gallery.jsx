const Gallery = () => {
  return (
    <div className="w-5/6 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-4">Toys Gallery</h1>
      <hr className="border border-black mb-3"/>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/pJHrL28/pexels-photo-5623059.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/KXNf4nm/pexels-photo-12585838.webp"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/sq4bTHz/pexels-photo-681118.webp"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/nj8mqhZ/ian-rush-football-action-figure-photo-3ht684fbhzkrn6g3.webp"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Gallery;
