import { Tab, Tabs, TabList, TabPanel, } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = ({ toys }) => {
  console.log(toys[0].categories[0].sub_name);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Shop by Category</h1>
      <Tabs>
        <TabList>
          {toys.map((toy) => (
            <Tab key={toy._id}>{toy.category_name}</Tab>
          ))}
        </TabList>
        {toys.map((toy) => (
          <TabPanel key={toy._id}>{toy.categories.sub_name}</TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
