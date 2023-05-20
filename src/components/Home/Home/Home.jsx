import { useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Discount from "../Discount/Discount";
import HappyClient from "../HappyClient/HappyClient";

const Home = () => {
  const toys = useLoaderData()
  console.log(toys)
  return (
    <div>
      <Banner></Banner>
      <Discount></Discount>
      <Gallery></Gallery>
      <ShopByCategory toys={toys}></ShopByCategory>
      <HappyClient></HappyClient>
    </div>
  );
};

export default Home;