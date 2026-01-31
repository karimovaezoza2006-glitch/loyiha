import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import Profile from "../pages/profile";
import Shop from "../pages/shop";
import BlogDetail from "../pages/blog/BlogDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* BLOG */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />

      {/* SHOP */}
      <Route path="/shop" element={<Shop />} />

      {/* PROFILE */}
      <Route path="/profile">
        <Route index element={<Profile />} />
        <Route path=":tab" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
