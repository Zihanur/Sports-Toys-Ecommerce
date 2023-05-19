import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubCategories from "../SubCategories/SubCategories";

const ShopByCategory = ({ toys }) => {
  console.log(toys[0].categories[0].sub_name);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mt-4">Shop by Category</h1>
      <Tabs className="">
        <TabList className="text-xl">
          {toys.map((toy) => (
            <Tab key={toy._id}>{toy.category_name}</Tab>
          ))}
        </TabList>
        {toys.map((toy) => (
          <TabPanel key={toy._id}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container">
              {toy.categories.map((category) => (
                <SubCategories
                  key={category._id}
                  category={category}
                ></SubCategories>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
