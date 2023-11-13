import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image: require("../assets/blog_1.jpg"),
      date: "05 Oct 2023",
      title: "What is a Sustainable Community?",
    },
    {
      id: 2,
      image: require("../assets/blog_2.jpg"),
      date: "02 Oct 2023",
      title: "A future perspective on sustainable",
    },
    {
      id: 3,
      image: require("../assets/blog_3.jpg"),
      date: "02 Sep 2023",
      title: "Renewable Enegry",
    },
    {
      id: 4,
      image: require("../assets/blog_4.jpg"),
      date: "15 Aug 2023",
      title: "What is a Sustainable Community?",
    },
  ];
  return (
    <>
      <Header />

      <div className="bg-softprimary pt-32 md:pt-20 xl:pt-40 pb-10 px-5">
        <div className="max-w-7xl mx-auto text-white space-y-5">
          <p className="xl:text-4xl text-xl font-bold">Blog Library</p>
          <p>
            Comprehensive white papers,guides and reports about carbon
            accounting
          </p>
        </div>
        <p></p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 px-5 gap-7 max-w-7xl mx-auto my-20">
        {blogs.map((item, index) => (
          <div
            className="hover:bg-secondary bg-gray-50 group border rounded p-2 "
            key={index}
          >
            <Link to={`/blogs/${item?.id}`}>
              <img
                src={item?.image}
                className="h-64 w-full rounded-lg object-cover"
                alt=""
              />
              <div className="p-2 group-hover:text-white">
                <p className="text-sm font-light">{item?.date}</p>
                <p className="font-semibold text-xl">{item?.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default Blogs;
