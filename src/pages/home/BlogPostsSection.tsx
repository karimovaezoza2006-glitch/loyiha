import { useEffect } from "react";
import AOS from "aos";

import blog1 from "../../assets/img/blog1.png";
import blog2 from "../../assets/img/blog2.png";
import blog3 from "../../assets/img/blog3.png";
import blog4 from "../../assets/img/blog4.png";

const blogs = [
  {
    img: blog1,
    date: "September 12",
    read: "Read in 6 minutes",
    title: "Cactus & Succulent Care Tips",
    desc: "Cacti are succulents are easy care plants for any home or patio.",
  },
  {
    img: blog2,
    date: "September 13",
    read: "Read in 2 minutes",
    title: "Top 10 Succulents for Your Home",
    desc: "Best in hanging baskets. Prefers medium to high light.",
  },
  {
    img: blog3,
    date: "September 15",
    read: "Read in 3 minutes",
    title: "Cacti & Succulent Care Tips",
    desc: "Cacti and succulents thrive in containers and because most are...",
  },
  {
    img: blog4,
    date: "September 15",
    read: "Read in 2 minutes",
    title: "Best Houseplants Room By Room",
    desc: "The benefits of houseplants are endless. In addition to...",
  },
];

const BlogPostsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Our Blog Posts</h2>
          <p className="text-gray-500 mt-2">
            We are an online plant shop offering a wide range of cheap and trendy
            plants.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {blogs.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-green-600 text-sm mb-2">
                  {item.date} | {item.read}
                </p>

                <h3 className="font-semibold text-lg leading-snug mb-2 group-hover:text-green-600 transition">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {item.desc}
                </p>

                <button className="text-sm font-medium flex items-center gap-1 hover:text-green-600 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsSection;
