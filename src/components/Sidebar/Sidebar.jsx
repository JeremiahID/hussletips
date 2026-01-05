import Trending from "./Trending";
import Categories from "./Categories";
import Newsletter from "./Newsletter";

const Sidebar = () => {
  return (
    <aside>
      <Trending />
      <Categories />
      <Newsletter />
    </aside>
  );
};

export default Sidebar;
