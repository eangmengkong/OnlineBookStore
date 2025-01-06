import Hero from "../../common/Hero";
import Blog from "./Blog";
import HBestSeller from "./HBestSeller";
import HDeals from "./HDeals";
import HFeature from "./HFeature";
import Data from "./data/Data";

const Home = () => {
  return (
    <>
      <Hero />
      <HFeature data={Data.Feature} />
      <HDeals />
      <HBestSeller data={Data.BestSeller} />
      <Blog />
    </>
  );
};

export default Home;
