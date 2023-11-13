import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Test from "./pages/Test";

const App = () => {
  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen md:text-xl lg:text-3xl">
              404 | Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
