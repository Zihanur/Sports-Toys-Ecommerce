import { useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  const toys = useLoaderData()
  console.log(toys)
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory toys={toys}></ShopByCategory>
    </div>
  );
};

export default Home;