import { Link } from "react-router-dom";
import MobileHeader from "./MobileHeader";

const Header = ({radius}) => {
  return (
    <>
      <div className="bg-secondary h-5"></div>
      <div className={`${radius} bg-softprimary `}>
        <div className="container mx-auto relative">
          <div className="md:flex items-center justify-between h-14 lg:h-24 px-10 hidden">
            {/* logo */}
            <Link to={"/"}>
              <img
                src={require("../assets/logo.png")}
                className="xl:h-32 xl:w-32 md:h-20 z-10 md:w-20 rounded-full border border-secondary xl:absolute mt-16 md:-mt-5"
                alt=""
              />
            </Link>

            {/* nav links */}
            <div className="space-x-10 text-white hidden md:block">
              <a href="/#about">About Us</a>
              <a href="/#product">Our Product</a>
              <Link to={"/blogs"}>Blogs</Link>
              <a href="/#product" className="bg-darksecondary rounded-full px-3 py-1">Request Demo</a>
              <Link to={'/'}>Login</Link>
            </div>
          </div>

          <MobileHeader />
        </div>
      </div>
    </>
  );
};

export default Header;
