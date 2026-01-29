
// import ShopPage from "./ShopPage";

import Header from "../../components/header/index"
// import Showcase from "./Showcase";
import Footer from "../../components/footer/index"
import NewsletterSection from "./NewsletterSection";
import BlogPostsSection from "./BlogPostsSection";
import Hero from "../../components/hero";
import Dashboard from "../../components/dashboard";
import PlantPromoSection from "./PlantCard";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-[90%] m-auto ">
        <Hero/>
        <Dashboard/>
      </div>
      
      {/* <Showcase /> */}
      {/* <ShopPage /> */}
      <BlogPostsSection/>
      <PlantPromoSection />
      <NewsletterSection/>
      <Footer/>
    </div>
  );
};

export default Home;
